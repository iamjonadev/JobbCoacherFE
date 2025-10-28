import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Form } from '../../../components/form/form';
import { Services } from '../../../components/services/services';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
import JobData from '../../../data/job.json'

@Component({
  selector: 'app-job-grid-four',
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
  templateUrl: './job-grid-four.html',
  styleUrl: './job-grid-four.scss'
})
export class JobGridFour {
  jobData = JobData;
}
