import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../../components/footer/footer';
import { Navbar } from '../../../components/navbar/navbar';

@Component({
  selector: 'app-helpcenter-support',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Footer
  ],
  templateUrl: './helpcenter-support.html',
  styleUrl: './helpcenter-support.scss'
})
export class HelpcenterSupport {
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
