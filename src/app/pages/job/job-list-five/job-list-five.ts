import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Form } from '../../../components/form/form';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';

import JobData from '../../../data/job.json'
import { Services } from '../../../components/services/services';

@Component({
  selector: 'app-job-list-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Form,
    Services,
    ExploreJob,
    Footer
  ],
  templateUrl: './job-list-five.html',
  styleUrl: './job-list-five.scss'
})
export class JobListFive {
jobData = JobData
}
