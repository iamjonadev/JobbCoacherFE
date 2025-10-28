import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { tns } from 'tiny-slider';
import { GetJob } from '../../../components/get-job/get-job';
import { PopularJobFour } from '../../../components/popular-job-four/popular-job-four';
import { Cta } from '../../../components/cta/cta';
import { Counter } from '../../../components/counter/counter';
import { BestCompaniesTwo } from '../../../components/best-companies-two/best-companies-two';
import { Blog } from '../../../components/blog/blog';
import { Footer } from '../../../components/footer/footer';
@Component({
  selector: 'app-index-ten',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    GetJob,
    PopularJobFour,
    Cta,
    Counter,
    BestCompaniesTwo,
    Blog,
    Footer
  ],
  templateUrl: './index-ten.html',
  styleUrl: './index-ten.scss'
})
export class IndexTen {
  slider:any
  ngAfterViewInit(): void {
    this.slider = tns({
      container: '.tiny-one-item',
      items: 1,
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 5000,
      navPosition: "bottom",
      controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 2000,
      gutter: 0,
  });
  }

  servicesData = [
    {
      image:'assets/images/work/01.jpg',
      title:'Product & Branding Design'
    },
    {
      image:'assets/images/work/02.jpg',
      title:'Wordpress Development'
    },
    {
      image:'assets/images/work/03.jpg',
      title:'Audio & Video Editing'
    },
    {
      image:'assets/images/work/04.jpg',
      title:'Admin & Customer Support'
    },
    {
      image:'assets/images/work/05.jpg',
      title:'UX / UI Designer'
    },
    {
      image:'assets/images/work/06.jpg',
      title:'Digital Marketing'
    },
  ]
}
