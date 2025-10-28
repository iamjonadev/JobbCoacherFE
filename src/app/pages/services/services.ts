import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Accordian } from '../../components/accordian/accordian';
import { Footer } from '../../components/footer/footer';
import { SEOService } from '../../services/seo.service';
// import { ExploreJob } from '../../components/explore-job/explore-job';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Accordian,
    Footer
    //ExploreJob - removed as per recent edits
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements OnInit {

  constructor(private seo: SEOService) {}

  ngOnInit(): void {
    this.seo.updateSEO({
      title: 'Våra tjänster – CV-granskning, intervjuträning & karriärcoaching | ABC Jobbcoacher',
      description: 'Utforska våra tjänster för studenter och seniorer: personlig coaching, CV-granskning, intervjuträning och karriärstrategi. Vi hjälper dig hitta rätt jobb i din kommun.',
      keywords: 'jobbcoach, karriärcoach, CV-granskning, intervjuträning, karriärstrategi, seniorbemanning, studentbemanning, Upplands Väsby, Sollentuna, Täby, jobb Sverige',
      ogTitle: 'ABC Jobbcoacher – Tjänster för din karriärutveckling',
      ogDescription: 'Vi erbjuder skräddarsydda karriärtjänster för dig som söker jobb eller vill utvecklas i arbetslivet. Få stöd hela vägen.',
      ogUrl: 'https://abcjobbcoacher.se/services',
      canonical: 'https://abcjobbcoacher.se/services'
    });
  }


  servicesData = [
  {
    icon: 'uil uil-users-alt', // 👥 Rusta och Matcha
    title: 'Rusta och Matcha',
    desc: 'Vi hjälper dig att skapa en effektiv jobbsökningsstrategi och nå fler möjligheter.'
  },
  {
    icon: 'uil uil-file-check-alt', // 📄 CV-granskning
    title: 'CV-granskning',
    desc: 'Få ditt CV professionellt granskat och optimerat för att imponera på arbetsgivare.'
  },
  {
    icon: 'uil uil-comment-alt-lines', // 🎤 Intervjuträning
    title: 'Intervjuträning',
    desc: 'Träna din intervjuteknik och få feedback för att öka ditt självförtroende.'
  },
  {
    icon: 'uil uil-user-check', // 🎯 Karriärcoaching
    title: 'Karriärcoaching',
    desc: 'Individuell coachning för att utveckla din karriärstrategi och personliga mål.'
  }
];

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
