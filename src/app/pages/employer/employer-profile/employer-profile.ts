import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
import JobData from '../../../data/job.json'

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    ExploreJob,
    Footer,
  ],
  templateUrl: './employer-profile.html',
  styleUrl: './employer-profile.scss'
})
export class EmployerProfile {
  jobData = JobData;
  jobId:any;
  data:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id']
    this.data = this.jobData.find((x)=>x.id === parseInt(this.jobId));
  }
}
