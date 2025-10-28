import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import JobData from '../../data/job.json'

@Component({
  selector: 'app-popular-job-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './popular-job-two.html',
  styleUrl: './popular-job-two.scss'
})
export class PopularJobTwo {
  jobData = JobData
}
