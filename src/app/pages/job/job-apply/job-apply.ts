import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-job-apply',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Footer
  ],
  templateUrl: './job-apply.html',
  styleUrl: './job-apply.scss'
})
export class JobApply {

}
