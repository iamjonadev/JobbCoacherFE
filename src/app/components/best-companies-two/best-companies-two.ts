import { Component } from '@angular/core';
import JobData from '../../data/job.json'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-companies-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './best-companies-two.html',
  styleUrl: './best-companies-two.scss'
})
export class BestCompaniesTwo {
jobData = JobData
}
