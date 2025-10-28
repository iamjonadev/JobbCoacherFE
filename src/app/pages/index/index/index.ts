import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../components/navbar/navbar';
import { PopularCategories } from '../../../components/popular-categories/popular-categories';
import { MillionsOfJob } from '../../../components/millions-of-job/millions-of-job';
import { BestCompanies } from '../../../components/best-companies/best-companies';
import { PopularJobOne } from '../../../components/popular-job-one/popular-job-one';
import { Services } from '../../../components/services/services';
import { Blog } from '../../../components/blog/blog';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
import { SEOService } from '../../../services/seo.service';

import JobData from '../../../data/job.json'


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    PopularCategories,
    MillionsOfJob,
    BestCompanies,
    PopularJobOne,
    Services,
    Blog,
    ExploreJob,
    Footer
  ],
  templateUrl: './index.html',
  styleUrl: './index.scss'
})

export class Index implements OnInit {
  jobData = JobData;

  constructor(private seo: SEOService) {}

  ngOnInit(): void {
    this.seo.updateSEO({
      title: 'ABC Jobbcoacher – Hitta rätt jobb med personlig coachning',
      description: 'Välkommen till ABC Jobbcoacher. Vi erbjuder CV-granskning, intervjuträning och karriärstrategi för både studenter och seniorer. Med lokal förankring hjälper vi dig hitta rätt jobb i din kommun.',
      keywords: 'jobbcoach, karriärcoach, CV-granskning, intervjuträning, seniorbemanning, studentbemanning, Upplands Väsby, Sollentuna, Täby, jobb Sverige',
      ogTitle: 'ABC Jobbcoacher – Din karriärpartner i kommunen',
      ogDescription: 'Få personlig hjälp att ta nästa steg i karriären. Vi matchar dig med rätt uppdrag och arbetsgivare – med stöd hela vägen.',
      ogUrl: 'https://abcjobbcoacher.se',
      canonical: 'https://abcjobbcoacher.se'
    });


    // Add organization structured data for homepage
    this.seo.addOrganizationStructuredData();
  }
}
