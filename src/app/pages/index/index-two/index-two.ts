import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';
import { TrendingServices } from '../../../components/trending-services/trending-services';
import { PopularJobTwo } from '../../../components/popular-job-two/popular-job-two';
import { Counter } from '../../../components/counter/counter';
import { BestCompanies } from '../../../components/best-companies/best-companies';
import { QueAns } from '../../../components/que-ans/que-ans';
import { ExploreJob } from '../../../components/explore-job/explore-job';

@Component({
  selector: 'app-index-two',
  standalone: true,
  imports: [
    CommonModule,
     RouterLink,
     Navbar,
     Footer,
     TrendingServices,
     PopularJobTwo,
     Counter,
     BestCompanies,
     QueAns,
     ExploreJob,
     Footer
    ],
  templateUrl: './index-two.html',
  styleUrl: './index-two.scss'
})
export class IndexTwo {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
