import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Form } from '../../../components/form/form';
import JobData from '../../../data/job.json'
import { Services } from '../../../components/services/services';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
@Component({
  selector: 'app-job-grid-one',
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
  templateUrl: './job-grid-one.html',
  styleUrl: './job-grid-one.scss'
})
export class JobGridOne {
  jobData = JobData;
}
