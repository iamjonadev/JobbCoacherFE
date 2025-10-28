import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Accordian } from '../../../components/accordian/accordian';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-helpcenter-overview',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Accordian,
    ExploreJob,
    Footer
  ],
  templateUrl: './helpcenter-overview.html',
  styleUrl: './helpcenter-overview.scss'
})
export class HelpcenterOverview {
  about=[
    {
      icon:'uil uil-question-circle',
      title:'FAQs',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      link:'/helpcenter-faqs'
    },
    {
      icon:'uil uil-file-bookmark-alt',
      title:'Guides / Support',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      link:'/helpcenter-guides'
    },
    {
      icon:'uil uil-cog',
      title:'Support Request',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      link:'/helpcenter-support'
    },
  ]
}
