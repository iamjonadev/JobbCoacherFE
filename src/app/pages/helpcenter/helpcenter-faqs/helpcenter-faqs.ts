import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Accordian } from '../../../components/accordian/accordian';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-helpcenter-faqs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Accordian,
    ExploreJob,
    Footer
  ],
  templateUrl: './helpcenter-faqs.html',
  styleUrl: './helpcenter-faqs.scss'
})
export class HelpcenterFaqs {

}
