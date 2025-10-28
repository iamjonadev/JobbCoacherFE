import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHome } from '../../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHome
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  date:any;

  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
