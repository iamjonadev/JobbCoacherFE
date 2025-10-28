import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Services } from '../../../components/services/services';
import { MillionsOfJob } from '../../../components/millions-of-job/millions-of-job';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Services,
    MillionsOfJob,
    Footer
  ],
  templateUrl: './career.html',
  styleUrl: './career.scss'
})
export class Career {
  
  jobOpeningData = [
    {
      name:'Frontend Developer',
      title:'Total Openings: 1'
    },
    {
      name:'Business Development Manager',
      title:'Total Openings: 2'
    },
    {
      name:'Backend Developer',
      title:'Total Openings: 4'
    },
  ]
}
