import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../components/navbar/navbar';
import { PopularCategories } from '../../../components/popular-categories/popular-categories';
import { MillionsOfJob } from '../../../components/millions-of-job/millions-of-job';
import { PopularJobFive } from '../../../components/popular-job-five/popular-job-five';
import { Cta } from '../../../components/cta/cta';
import { Counter } from '../../../components/counter/counter';
import { BestCompaniesTwo } from '../../../components/best-companies-two/best-companies-two';
import { Blog } from '../../../components/blog/blog';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-index-six',
  standalone: true,
  imports: [
    CommonModule,
    // RouterLink, - RouterLink is not needed as there is no routerLink in this HTML
    Navbar,
    PopularCategories,
    MillionsOfJob,
    PopularJobFive,
    Cta,
    // Counter, - removed as per the latest HTML
    // BestCompaniesTwo, - removed as per the latest HTML
    Blog,
    Footer
  ],
  templateUrl: './index-six.html',
  styleUrl: './index-six.scss'
})
export class IndexSix {

}
