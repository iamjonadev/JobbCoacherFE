import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private defaultSEO: SEOData = {
    title: 'ABC Jobbcoacher – Personlig karriärcoachning i din kommun',
    description: 'Vi erbjuder CV-granskning, intervjuträning och karriärstrategi för både studenter och seniorer. Med lokal förankring hjälper vi dig hitta rätt jobb – med stöd hela vägen.',
    keywords: 'jobbcoach, karriärcoach, CV-granskning, intervjuträning, seniorbemanning, studentbemanning, Upplands Väsby, Sollentuna, Täby, jobb Sverige',
    ogTitle: 'ABC Jobbcoacher – Hitta rätt jobb med personlig coachning',
    ogDescription: 'Skräddarsydd karriärhjälp för dig som söker jobb i din kommun. Vi matchar dig med rätt uppdrag och hjälper arbetsgivare hitta rätt kompetens.',
    ogImage: 'https://host.adoteam.dev/inventory/products/ogImage_jobbcoacher.png',
    ogUrl: 'https://abc.adoteam.dev',
    twitterCard: 'summary_large_image',
    robots: 'index, follow'
  };

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  updateSEO(seoData: SEOData): void {
    const seo = { ...this.defaultSEO, ...seoData };

    // Update title
    if (seo.title) {
      this.title.setTitle(seo.title);
    }

    // Update meta description
    if (seo.description) {
      this.meta.updateTag({ name: 'description', content: seo.description });
    }

    // Update keywords
    if (seo.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seo.keywords });
    }

    // Update robots
    if (seo.robots) {
      this.meta.updateTag({ name: 'robots', content: seo.robots });
    }

    // Update Open Graph tags
    if (seo.ogTitle) {
      this.meta.updateTag({ property: 'og:title', content: seo.ogTitle });
    }
    if (seo.ogDescription) {
      this.meta.updateTag({ property: 'og:description', content: seo.ogDescription });
    }
    if (seo.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: seo.ogImage });
    }
    if (seo.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: seo.ogUrl });
    }
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Update Twitter Card tags
    if (seo.twitterCard) {
      this.meta.updateTag({ name: 'twitter:card', content: seo.twitterCard });
    }
    if (seo.twitterTitle || seo.ogTitle) {
      this.meta.updateTag({ name: 'twitter:title', content: seo.twitterTitle || seo.ogTitle || seo.title || '' });
    }
    if (seo.twitterDescription || seo.ogDescription) {
      this.meta.updateTag({ name: 'twitter:description', content: seo.twitterDescription || seo.ogDescription || seo.description || '' });
    }
    if (seo.twitterImage || seo.ogImage) {
      this.meta.updateTag({ name: 'twitter:image', content: seo.twitterImage || seo.ogImage || '' });
    }

    // Update canonical URL
    if (seo.canonical) {
      this.updateCanonical(seo.canonical);
    }
  }

  private updateCanonical(url: string): void {
    const head = document.head;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', url);
  }

  // Method to add structured data for job listings
  addJobStructuredData(jobData: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": jobData.title,
      "description": jobData.description,
      "datePosted": jobData.datePosted,
      "validThrough": jobData.validThrough,
      "employmentType": jobData.employmentType,
      "hiringOrganization": {
        "@type": "Organization",
        "name": jobData.companyName,
        "sameAs": jobData.companyWebsite
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": jobData.city,
          "addressCountry": jobData.country
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": jobData.currency,
        "value": {
          "@type": "QuantitativeValue",
          "value": jobData.salary,
          "unitText": jobData.salaryPeriod
        }
      }
    });

    document.head.appendChild(script);
  }

  // Method to add organization structured data
  addOrganizationStructuredData(): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ABC Jobbcoacher",
      "url": "https://abc.adoteam.dev",
      "logo": "https://host.adoteam.dev/inventory/products/web_logo.png",
      "description": "Leading job portal in Sweden connecting talented professionals with top employers",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sollentuna",
        "addressCountry": "Sweden"
      },
      "sameAs": [
        "https://facebook.com/abcjobbcoacher",
        "https://linkedin.com/company/abcjobbcoacher",
        "https://twitter.com/abcjobbcoacher"
      ]
    });

    document.head.appendChild(script);
  }
}
