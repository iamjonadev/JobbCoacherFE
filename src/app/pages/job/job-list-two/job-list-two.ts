import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { JobSidebar } from '../../../components/job-sidebar/job-sidebar';
import { Services } from '../../../components/services/services';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
import JobData from '../../../data/job.json'

@Component({
  selector: 'app-job-list-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    JobSidebar,
    Services,
    ExploreJob,
    Footer
  ],
  templateUrl: './job-list-two.html',
  styleUrl: './job-list-two.scss'
})
export class JobListTwo {
  jobData = JobData;
}
