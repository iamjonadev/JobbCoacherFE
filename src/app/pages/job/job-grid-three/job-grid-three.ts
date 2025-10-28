import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Form } from '../../../components/form/form';

import JobData from '../../../data/job.json'
import { Services } from '../../../components/services/services';
import { Footer } from '../../../components/footer/footer';
import { ExploreJob } from '../../../components/explore-job/explore-job';
@Component({
  selector: 'app-job-grid-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Form,
    Services,
    Footer,
    ExploreJob
  ],
  templateUrl: './job-grid-three.html',
  styleUrl: './job-grid-three.scss'
})
export class JobGridThree {
 jobData = JobData;
}
