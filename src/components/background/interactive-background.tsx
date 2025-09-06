"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { gsap } from "gsap";

export function InteractiveBackground() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];
    const isDark = theme === 'dark' || theme === 'system';

    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute rounded-full pointer-events-none";
        
        // Random sizes and colors based on theme
        const size = Math.random() * 4 + 2;
        const hue = Math.random() * 60 + 260; // Purple to blue range
        const opacity = isDark ? Math.random() * 0.3 + 0.1 : Math.random() * 0.2 + 0.05;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `hsl(${hue}, 70%, ${isDark ? '60%' : '50%'})`;
        particle.style.opacity = opacity.toString();
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        container.appendChild(particle);
        particles.push(particle);
        particlesRef.current.push(particle);
        
        // Animate particles
        gsap.to(particle, {
          y: "-=100",
          x: `+=${Math.random() * 100 - 50}`,
          rotation: 360,
          duration: Math.random() * 20 + 10,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 5
        });
        
        // Opacity animation based on theme
        gsap.to(particle, {
          opacity: isDark ? Math.random() * 0.5 + 0.1 : Math.random() * 0.3 + 0.05,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }
    };

    // Create gradient orbs
    const createGradientOrbs = () => {
      for (let i = 0; i < 6; i++) {
        const orb = document.createElement("div");
        orb.className = "absolute rounded-full pointer-events-none";
        
        const size = Math.random() * 400 + 200;
        const hue1 = Math.random() * 60 + 260;
        const hue2 = hue1 + 30;
        const orbOpacity = isDark ? 0.1 : 0.05;
        const orbOpacity2 = isDark ? 0.05 : 0.03;
        
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.background = `radial-gradient(circle, hsl(${hue1}, 70%, 50%, ${orbOpacity}) 0%, hsl(${hue2}, 70%, 60%, ${orbOpacity2}) 50%, transparent 100%)`;
        orb.style.left = `${Math.random() * 120 - 10}%`;
        orb.style.top = `${Math.random() * 120 - 10}%`;
        orb.style.filter = "blur(1px)";
        
        container.appendChild(orb);
        
        // Slow floating animation
        gsap.to(orb, {
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          rotation: Math.random() * 360,
          duration: Math.random() * 30 + 20,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      // Move particles slightly based on mouse position
      particlesRef.current.forEach((particle, index) => {
        const factor = (index % 5 + 1) * 0.5;
        gsap.to(particle, {
          x: `+=${xPercent * factor}`,
          y: `+=${yPercent * factor}`,
          duration: 2,
          ease: "power2.out"
        });
      });
    };

    createParticles();
    createGradientOrbs();
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up particles
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      particlesRef.current = [];
    };
  }, [theme]);

  const isDark = theme === 'dark' || theme === 'system';

  const getBackgroundStyle = () => {
    if (isDark) {
      return {
        background: `
          radial-gradient(ellipse at top, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)
        `
      };
    } else {
      return {
        background: `
          radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)
        `
      };
    }
  };

  const getGridStyle = () => {
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    return {
      backgroundImage: `
        linear-gradient(${gridColor} 1px, transparent 1px),
        linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      animation: 'gridMove 20s linear infinite'
    };
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden transition-all duration-500"
      style={getBackgroundStyle()}
    >
      {/* Animated grid overlay */}
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-10'}`}
        style={getGridStyle()}
      />
      
      {/* CSS animation for grid */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
}