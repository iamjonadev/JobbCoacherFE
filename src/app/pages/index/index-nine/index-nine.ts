import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { MillionsOfJob } from '../../../components/millions-of-job/millions-of-job';
import { PopularJobFive } from '../../../components/popular-job-five/popular-job-five';
import { Counter } from '../../../components/counter/counter';
import { Cta } from '../../../components/cta/cta';
import { BestCompaniesTwo } from '../../../components/best-companies-two/best-companies-two';
import { Blog } from '../../../components/blog/blog';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-index-nine',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    MillionsOfJob,
    PopularJobFive,
    Counter,
    Cta,
    BestCompaniesTwo,
    Blog,
    Footer
  ],
  templateUrl: './index-nine.html',
  styleUrl: './index-nine.scss'
})
export class IndexNine {

}
