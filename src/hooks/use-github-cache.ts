import { useState, useEffect, useCallback } from 'react';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

interface CachedData {
  data: GitHubRepo[];
  timestamp: number;
  ttl: number; // time to live in milliseconds
}

export function useGitHubCache(username?: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cache duration: 5 minutes
  const CACHE_TTL = 5 * 60 * 1000;
  const CACHE_KEY = `github-repos-${username}`;

  const getCachedData = useCallback((): GitHubRepo[] | null => {
    if (typeof window === 'undefined') return null;
    
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const parsedCache: CachedData = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid
    if (now - parsedCache.timestamp < parsedCache.ttl) {
      return parsedCache.data;
    }

    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    return null;
  }, [CACHE_KEY]);

  const setCachedData = useCallback((data: GitHubRepo[]) => {
    if (typeof window === 'undefined') return;
    
    const cacheData: CachedData = {
      data,
      timestamp: Date.now(),
      ttl: CACHE_TTL
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  }, [CACHE_KEY, CACHE_TTL]);

  const fetchRepos = useCallback(async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      // Check cache first
      const cachedRepos = getCachedData();
      if (cachedRepos) {
        setRepos(cachedRepos);
        setLoading(false);
        return;
      }

      // If no cache, fetch from API with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
        {
          signal: controller.signal,
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Filter and format repos
      const formattedRepos = data
        .filter((repo: GitHubRepo & { fork?: boolean }) => !repo.fork) // Exclude forks
        .slice(0, 6) // Limit to 6 repos
        .map((repo: GitHubRepo & { fork?: boolean }) => ({
          name: repo.name,
          description: repo.description || 'No description available',
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          language: repo.language,
          updated_at: repo.updated_at
        }));

      setRepos(formattedRepos);
      setCachedData(formattedRepos);

    } catch (err) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          setError('Request timed out. Using cached data if available.');
        } else {
          setError(`Failed to fetch repositories: ${err.message}`);
        }
      } else {
        setError('Failed to fetch repositories');
      }

      // Fallback to cached data even if expired
      const expiredCache = localStorage.getItem(CACHE_KEY);
      if (expiredCache) {
        const parsedCache: CachedData = JSON.parse(expiredCache);
        setRepos(parsedCache.data || []);
      }
    } finally {
      setLoading(false);
    }
  }, [CACHE_KEY, getCachedData, setCachedData]);

  const refreshCache = () => {
    if (username) {
      localStorage.removeItem(CACHE_KEY);
      fetchRepos(username);
    }
  };

  useEffect(() => {
    if (username) {
      fetchRepos(username);
    }
  }, [username, fetchRepos]);

  return {
    repos,
    loading,
    error,
    refreshCache,
    hasCache: !!getCachedData()
  };
}