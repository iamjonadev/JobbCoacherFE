import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import JobData from '../../data/job.json'

@Component({
  selector: 'app-popular-job-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './popular-job-four.html',
  styleUrl: './popular-job-four.scss'
})
export class PopularJobFour {
  jobData = JobData;
}
