import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { JobSidebar } from '../../../components/job-sidebar/job-sidebar';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Services } from '../../../components/services/services';
import { Footer } from '../../../components/footer/footer';

import JobData from '../../../data/job.json'

@Component({
  selector: 'app-job-list-six',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    JobSidebar,
    ExploreJob,
    Services,
    Footer
  ],
  templateUrl: './job-list-six.html',
  styleUrl: './job-list-six.scss'
})
export class JobListSix {
 jobData = JobData
}
