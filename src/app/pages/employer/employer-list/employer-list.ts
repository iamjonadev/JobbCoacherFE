import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
import { Accordian } from '../../../components/accordian/accordian';
import JobData from '../../../data/job.json'
@Component({
  selector: 'app-employer-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    ExploreJob,
    Footer,
    Accordian
  ],
  templateUrl: './employer-list.html',
  styleUrl: './employer-list.scss'
})
export class EmployerList {
  jobData = JobData

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
