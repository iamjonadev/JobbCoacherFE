import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHome } from '../../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHome
  ],
  templateUrl: './error.html',
  styleUrl: './error.scss'
})
export class Error {
date:any;
ngOnInit(): void {
  this.date = new Date().getFullYear();
}
}
