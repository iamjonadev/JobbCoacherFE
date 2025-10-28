import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../components/navbar/navbar';
import { Counter } from '../../../components/counter/counter';
import { PopularCategories } from '../../../components/popular-categories/popular-categories';
import { MillionsOfJob } from '../../../components/millions-of-job/millions-of-job';
import { PopularJobFour } from '../../../components/popular-job-four/popular-job-four';
import { BestCompanies } from '../../../components/best-companies/best-companies';
import { Services } from '../../../components/services/services';
import { Blog } from '../../../components/blog/blog';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-index-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Counter,
    PopularCategories,
    MillionsOfJob,
    PopularJobFour,
    BestCompanies,
    Services,
    Blog,
    ExploreJob,
    Footer
  ],
  templateUrl: './index-five.html',
  styleUrl: './index-five.scss'
})
export class IndexFive {

}
