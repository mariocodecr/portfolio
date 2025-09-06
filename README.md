# Developer Portfolio Template

A modern, responsive portfolio template built with Next.js 14+, TypeScript, TailwindCSS, and shadcn/ui.

## ✨ Features

- **Modern Design**: Clean, professional, and mobile-first responsive design
- **Dark/Light Mode**: System preference detection with manual toggle
- **Project Showcase**: Display projects with detailed pull requests and filtering
- **Skills Section**: Organized technical skills by category
- **Contact Integration**: Multiple contact methods and social links
- **Performance Optimized**: Next.js Image optimization, lazy loading, and smooth animations
- **SEO Ready**: Proper metadata, Open Graph tags, and semantic HTML
- **Accessible**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **TypeScript**: Full type safety throughout the application

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Customize your data:**
   - Edit `src/lib/data.ts` with your personal information, projects, and skills
   - Replace placeholder images in `/public/images/`
   - Add your resume to `/public/resume.pdf`

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── portfolio/
│   │   ├── navigation.tsx     # Fixed navigation with theme toggle
│   │   ├── hero-section.tsx   # Hero section with profile
│   │   ├── projects-section.tsx  # Projects with filtering
│   │   ├── project-card.tsx   # Individual project cards
│   │   ├── filters.tsx        # Project filtering components
│   │   ├── skills-section.tsx # Skills categorized display
│   │   ├── contact-section.tsx # Contact methods and CTA
│   │   └── footer.tsx         # Site footer
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── data.ts            # Portfolio data (CUSTOMIZE THIS!)
│   └── utils.ts           # Utility functions
└── types/
    └── portfolio.ts       # TypeScript interfaces
```

## 🎨 Customization

### 1. Personal Data
Edit `src/lib/data.ts` to add your:
- Personal information (name, title, bio, contact)
- Projects with pull requests
- Technical skills
- Social media links

### 2. Images
Replace these placeholder files:
- `/public/images/avatar.jpg` - Your profile photo (400x400px recommended)
- `/public/images/og.jpg` - Social media preview (1200x630px)
- `/public/resume.pdf` - Your resume/CV

### 3. Styling
The design uses CSS custom properties defined in `globals.css`:
- Modify colors in the `:root` and `.dark` sections
- Adjust spacing, typography, and animations
- All colors use HSL values for better theme support

### 4. Metadata
Update SEO information in `src/app/layout.tsx`:
- Site title and description
- Open Graph tags
- Twitter cards
- Keywords and author info

## 🛠 Built With

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern React components
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Inter](https://fonts.google.com/specimen/Inter)** & **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** - Typography

## 📋 Data Structure

The portfolio data follows this structure:

```typescript
interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    bio: string;
    avatar: string;
    resume?: string;
    location?: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  projects: Project[];
  skills: {
    frontend: string[];
    backend: string[];
    databases?: string[];
    tools: string[];
  };
}
```

Each project can contain multiple pull requests with detailed descriptions and technology tags.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
This is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 📱 Features Overview

### Navigation
- Fixed top navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Theme toggle with system preference detection

### Hero Section
- Large profile image with decorative elements
- Personal introduction and call-to-action buttons
- Social media links
- Scroll indicator animation

### Projects Section
- Filter by project, technology, or search text
- Expandable project cards showing pull requests
- Technology badges and external links
- Responsive grid layout

### Skills Section
- Categorized skill display (Frontend, Backend, Databases, Tools)
- Visual skill counters
- Hover effects and animations

### Contact Section
- Multiple contact methods
- Professional call-to-action
- Location information
- Response time expectations

## 🤝 Contributing

This is a template project, but feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

- **Images**: Use high-quality images and consider using WebP format for better performance
- **Content**: Keep project descriptions concise but informative
- **SEO**: Update all metadata and add relevant keywords
- **Performance**: The template is optimized, but always test on real devices
- **Accessibility**: Maintain proper heading hierarchy and alt text for images

---

**Built with ❤️ and Next.js**
