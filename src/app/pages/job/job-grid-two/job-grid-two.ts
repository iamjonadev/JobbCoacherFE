import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { JobSidebar } from '../../../components/job-sidebar/job-sidebar';
import JobData from '../../../data/job.json'
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
import { Services } from '../../../components/services/services';

@Component({
  selector: 'app-job-grid-two',
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
  templateUrl: './job-grid-two.html',
  styleUrl: './job-grid-two.scss'
})
export class JobGridTwo {
 jobData = JobData;
}
