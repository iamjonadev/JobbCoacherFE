import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-job',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './get-job.html',
  styleUrl: './get-job.scss'
})
export class GetJob {

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

}
