import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import JobData from '../../data/job.json'
@Component({
  selector: 'app-popular-job-one',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './popular-job-one.html',
  styleUrl: './popular-job-one.scss'
})
export class PopularJobOne {
  jobData = JobData
}
