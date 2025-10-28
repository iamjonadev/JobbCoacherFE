import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { MillionsOfJob } from '../../components/millions-of-job/millions-of-job';
import { Counter } from '../../components/counter/counter';
import { QueAns } from '../../components/que-ans/que-ans';
import { Footer } from '../../components/footer/footer';
import { ExploreJob } from '../../components/explore-job/explore-job';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    MillionsOfJob,
    // Counter, - commented out as per recent edits
    QueAns,
    Footer
    // ExploreJob - commented out as per recent edits
  ],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.scss'
})
export class Aboutus implements OnInit {

  isOpen:any = false;

  constructor(private seo: SEOService) {}

  ngOnInit(): void {
    this.seo.updateSEO({
      title: 'Om oss – ABC Jobbcoacher | ABC Jobbcoacher',
      description: 'ABC Jobbcoacher erbjuder personlig karriärcoachning, CV-granskning och intervjuträning för både studenter och seniorer. Vi är lokalt förankrade och fokuserar på långsiktiga resultat.',
      keywords: 'om abc jobbcoacher, karriärcoachning, CV-granskning, intervjuträning, seniorbemanning, studentbemanning, jobbcoach Upplands Väsby, jobbcoach Sollentuna',
      ogTitle: 'Om ABC Jobbcoacher – Din karriärpartner i kommunen',
      ogDescription: 'Läs mer om vårt uppdrag att hjälpa människor hitta rätt jobb genom personlig coachning och lokal matchning.',
      ogUrl: 'https://abcjobbcoacher.se/om-oss',
      canonical: 'https://abcjobbcoacher.se/om-oss'
    });
  }

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  featureData = [
    {
      icon: 'uil uil-users-alt',
      title: 'Rusta och Matcha',
      desc: 'Personlig coachning för att skapa en effektiv jobbsökningsstrategi och hitta rätt väg till arbete eller studier.'
    },
    {
      icon: 'uil uil-file-check-alt',
      title: 'CV-granskning',
      desc: 'Vi granskar och optimerar ditt CV så att det sticker ut och ökar dina chanser hos arbetsgivare.'
    },
    {
      icon: 'uil uil-comment-alt-lines',
      title: 'Intervjuträning',
      desc: 'Få professionell träning och feedback för att stärka din intervjuteknik och ditt självförtroende.'
    },
    {
      icon: 'uil uil-user-check',
      title: 'Karriärcoaching',
      desc: 'Individuell rådgivning för att utveckla din karriärstrategi, sätta mål och skapa långsiktiga resultat.'
    }
  ];

}
