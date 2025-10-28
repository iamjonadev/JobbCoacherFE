import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import JobData from '../../data/job.json'

@Component({
  selector: 'app-best-companies',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './best-companies.html',
  styleUrl: './best-companies.scss'
})
export class BestCompanies {
  jobData = JobData;

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
}
