# 🚀 ABC Jobbcoacher - Jobb Coacher Career Portal

**Professional career coaching and job portal application built with Angular 20 and optimized for the Swedish market.**

[![Angular](https://img.shields.io/badge/Angular-20.1.0-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.13-blue)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)

---

## 🎯 **About This Project**

ABC Jobbcoacher is a comprehensive career coaching platform that connects job seekers with opportunities across Sweden. The application provides:

- **🎓 Career Coaching Services**: CV review, interview training, and career strategy
- **🏢 Job Matching Platform**: Connecting professionals with employers
- **📍 Local Focus**: Serving all Swedish municipalities (kommuner)
- **👥 Target Groups**: Students, seniors, and professionals at all career stages

**Live Application**: [abc.adoteam.dev](https://abc.adoteam.dev)

---

## ✨ **Key Features**

### **🔍 Advanced SEO Implementation**
- Dynamic meta tags and Open Graph optimization
- Structured data (Schema.org) for job postings
- XML sitemap and robots.txt for search engines
- Social media preview optimization

### **🌐 Swedish Market Optimization**
- Searchable dropdown for all 290 Swedish municipalities
- Swedish language content and terminology
- Location-based services and targeting
- Local SEO optimization for Sollentuna and surrounding areas

### **🎨 Modern UI/UX**
- Dark mode as default with light mode option
- Responsive design with Tailwind CSS
- Professional job portal interface
- Accessible and user-friendly forms

### **⚡ Technical Excellence**
- Angular 20 with standalone components
- Reactive forms with validation
- Modular architecture and reusable components
- Docker containerization for deployment

---

## 🛠️ **Tech Stack**

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 20.1.0 | Frontend framework |
| **TypeScript** | 5.8.2 | Type-safe development |
| **Tailwind CSS** | 4.1.13 | Utility-first styling |
| **ng-select** | 20.4.4 | Advanced dropdown components |
| **Docker** | Latest | Containerization |
| **Nginx** | Alpine | Web server |

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ and npm
- Angular CLI 20+
- Docker (for deployment)

### **Development Setup**

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd client04_jobbcoach.adoteam.dev/public_html
   npm install
   ```

2. **Start Development Server**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`

3. **Build for Production**
   ```bash
   ng build
   ```

### **Docker Deployment**

From the project root:
```bash
docker compose up client04_abc.adoteam.dev -d --build
```

---

## 📁 **Project Structure**

```
src/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── navbar/          # Main navigation
│   │   ├── footer/          # Site footer
│   │   └── ...
│   ├── pages/               # Route components
│   │   ├── index/           # Home page
│   │   ├── aboutus/         # About page
│   │   ├── services/        # Services page
│   │   └── contact/         # Contact page
│   ├── services/            # Angular services
│   │   └── seo.service.ts   # SEO management
│   └── data/                # Static data files
├── assets/                  # Images, styles, fonts
├── docs/                    # Project documentation
├── robots.txt              # Search engine directives
├── sitemap.xml            # Site structure
└── index.html             # Main HTML template
```

---

## 🎨 **Key Components**

### **Navigation & Layout**
- **Navbar**: Responsive navigation with active route highlighting
- **Footer**: Company information and social links
- **Switcher**: Theme toggle functionality

### **Core Pages**
- **Home (/)**: Job portal overview and featured content
- **About Us (/aboutus)**: Company mission and services
- **Services (/services)**: Career coaching offerings
- **Contact (/contact)**: Contact form with municipality selector

### **Advanced Features**
- **SEO Service**: Dynamic meta tag management
- **Municipality Selector**: Searchable dropdown for all Swedish kommuner
- **Form Validation**: Reactive forms with input sanitization
- **Responsive Design**: Mobile-first approach

---

## 🔧 **Development Commands**

### **Code Generation**
```bash
# Generate new component
ng generate component component-name

# Generate service
ng generate service service-name

# Generate module
ng generate module module-name
```

### **Testing**
```bash
# Run unit tests
ng test

# Run e2e tests
ng e2e

# Test coverage
ng test --code-coverage
```

### **Build Variations**
```bash
# Development build
ng build --configuration development

# Production build
ng build --configuration production

# Build with analysis
ng build --stats-json
```

---

## 🌐 **SEO & Performance**

### **SEO Implementation**
- **Meta Tags**: Dynamic titles and descriptions per route
- **Open Graph**: Social media preview optimization
- **Structured Data**: Schema.org markup for job postings
- **Sitemaps**: XML sitemap for search engine discovery
- **Robots.txt**: Search engine crawling directives

### **Performance Features**
- **Tree Shaking**: Optimized bundle sizes
- **Lazy Loading**: Route-based code splitting
- **Image Optimization**: Responsive image handling
- **Caching Strategy**: Efficient asset caching

*📚 For detailed SEO documentation, see [docs/README.md](./docs/README.md)*

---

## 🐳 **Docker Configuration**

### **Multi-stage Build**
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
EXPOSE 80
```

### **Deployment**
The application is configured for deployment with:
- Nginx reverse proxy
- SSL termination
- Docker Compose orchestration
- Production optimization

---

## 📝 **Configuration**

### **Environment Setup**
- **Development**: Local development server
- **Production**: Docker containerized deployment
- **Staging**: Available via Docker Compose

### **Key Configuration Files**
- `angular.json`: Angular CLI configuration
- `package.json`: Dependencies and scripts
- `tailwind.config.js`: Tailwind CSS configuration
- `docker-compose.yml`: Container orchestration

---

## 🤝 **Contributing**

### **Development Workflow**
1. Create feature branch from `main`
2. Implement changes with proper testing
3. Update documentation as needed
4. Submit pull request with clear description

### **Code Standards**
- Follow Angular style guide
- Use TypeScript strict mode
- Implement responsive design patterns
- Write meaningful commit messages

---

## 📊 **Analytics & Monitoring**

### **SEO Tracking**
- Google Search Console integration
- Rich results monitoring
- Sitemap submission and tracking

### **Performance Monitoring**
- Core Web Vitals tracking
- Build size analysis
- Runtime performance metrics

---

## 🔗 **Related Resources**

- **Live Site**: [abc.adoteam.dev](https://abc.adoteam.dev)
- **SEO Documentation**: [docs/README.md](./docs/README.md)
- **Angular Documentation**: [angular.io](https://angular.io/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)

---

## 📄 **License**

This project is part of the AdoteamAB multi-client hosting platform.

---

**Last Updated**: October 28, 2025  
**Version**: Angular 20.1.0  
**Status**: ✅ Production Ready
