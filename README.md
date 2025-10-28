# 🚀 ABC Jobbcoacher - Swedish Career Portal

A modern, SEO-optimized job portal and career coaching platform built with Angular 20, specifically designed for the Swedish market.

[![Angular](https://img.shields.io/badge/Angular-20.1.0-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.13-blue)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)

## 🌐 Live Demo
**[abc.adoteam.dev](https://abc.adoteam.dev)**

## ✨ Key Features

### 🇸🇪 Swedish Market Focus
- **290+ Swedish Municipalities**: Searchable dropdown for all kommuner
- **Swedish Content**: Fully localized for Swedish job seekers
- **Local SEO**: Optimized for Swedish search engines
- **Geographic Targeting**: Location-based services and targeting

### 🔍 Advanced SEO Implementation
- **Dynamic Meta Tags**: Automatic SEO optimization per page
- **Structured Data**: Schema.org markup for job postings
- **Open Graph**: Social media preview optimization
- **XML Sitemap**: Automated search engine discovery
- **Robots.txt**: Proper crawling directives

### 🎨 Modern UI/UX
- **Dark Mode Default**: Professional dark theme with light mode option
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Advanced Forms**: Reactive forms with validation and sanitization
- **Accessibility**: WCAG compliant interface

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 20.1.0 | Frontend framework with standalone components |
| **TypeScript** | 5.8.2 | Type-safe development |
| **Tailwind CSS** | 4.1.13 | Utility-first styling framework |
| **ng-select** | 20.4.4 | Advanced searchable dropdowns |
| **Docker** | Latest | Production containerization |
| **Nginx** | Alpine | Web server and reverse proxy |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 20+
- Docker (for deployment)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/iamjonadev/JobbCoacherFE.git
cd JobbCoacherFE

# Install dependencies
npm install

# Start development server
ng serve

# Navigate to http://localhost:4200/
```

### Production Build

```bash
# Build for production
ng build --configuration production

# Docker deployment
docker compose up -d --build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── navbar/         # Main navigation
│   │   └── footer/         # Site footer
│   ├── pages/              # Route components
│   │   ├── index/          # Home page
│   │   ├── aboutus/        # About page
│   │   ├── services/       # Services page
│   │   └── contact/        # Contact with municipality selector
│   ├── services/           # Angular services
│   │   └── seo.service.ts  # SEO management service
│   └── data/               # Swedish municipality data
├── assets/                 # Images, icons, and static files
├── docs/                   # Detailed documentation
├── robots.txt             # Search engine directives
├── sitemap.xml           # Site structure mapping
└── index.html            # Main HTML template
```

## 🎯 Core Components

### Navigation & Layout
- **Responsive Navbar**: Multi-page navigation with active states
- **Professional Footer**: Company info and social links
- **Theme Switcher**: Dark/light mode toggle

### Key Pages
- **Home (/)**: Job portal overview and featured content
- **About Us (/aboutus)**: Company mission and career coaching services
- **Services (/services)**: Detailed service offerings
- **Contact (/contact)**: Contact form with Swedish municipality selector

### Advanced Features
- **SEO Service**: Dynamic meta tag and structured data management
- **Municipality Data**: Complete Swedish kommun dataset with search
- **Form Validation**: Reactive forms with phone number sanitization
- **Google Maps**: Integrated map with Sollentuna location

## 🔧 Development Commands

```bash
# Development
ng serve                    # Start dev server
ng build                   # Build project
ng test                    # Run unit tests

# Code generation
ng generate component name # Generate component
ng generate service name   # Generate service

# Production
ng build --prod            # Production build
docker compose up -d       # Deploy with Docker
```

## 🌐 SEO & Performance

### SEO Features
- **Dynamic Titles**: Page-specific titles and descriptions
- **Open Graph Tags**: Social media preview optimization
- **JSON-LD Schema**: Structured data for job postings and organization
- **XML Sitemap**: Automatic search engine discovery
- **Meta Tags**: Comprehensive SEO meta tag implementation

### Performance Optimizations
- **Tree Shaking**: Optimized bundle sizes
- **Lazy Loading**: Route-based code splitting
- **Image Optimization**: Responsive and optimized images
- **Caching Strategy**: Efficient browser caching

*📚 For detailed SEO documentation, see [docs/README.md](./docs/README.md)*

## 🐳 Docker Deployment

### Multi-stage Dockerfile
```dockerfile
# Build stage
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/app/browser /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### Docker Compose
The application includes complete Docker Compose configuration for:
- SSL termination with Nginx
- Reverse proxy setup
- Production-ready deployment
- Multi-container orchestration

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Code Standards
- Follow Angular style guide
- Use TypeScript strict mode
- Implement responsive design patterns
- Write meaningful commit messages
- Include unit tests for new features

## 📊 Features Implemented

- ✅ **Angular 20 Application**: Complete standalone component architecture
- ✅ **Swedish Municipalities**: All 290+ kommuner with searchable dropdown
- ✅ **Comprehensive SEO**: Meta tags, Open Graph, Schema.org, sitemap
- ✅ **Dark Mode Default**: Professional dark theme with toggle
- ✅ **Responsive Design**: Mobile-first Tailwind CSS implementation
- ✅ **Contact Forms**: Reactive forms with validation and sanitization
- ✅ **Docker Ready**: Production containerization and deployment
- ✅ **Google Maps**: Sollentuna location integration
- ✅ **Professional Branding**: Complete ABC Jobbcoacher branding

## 🔗 Links

- **Live Application**: [abc.adoteam.dev](https://abc.adoteam.dev)
- **SEO Documentation**: [docs/README.md](./docs/README.md)
- **Angular Framework**: [angular.io](https://angular.io/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)

## 📄 License

This project is developed by [Adoteam](https://adoteam.dev) as part of the ABC Jobbcoacher platform.

---

**Created**: October 2025  
**Last Updated**: October 28, 2025  
**Status**: ✅ Production Ready  
**Version**: Angular 20.1.0