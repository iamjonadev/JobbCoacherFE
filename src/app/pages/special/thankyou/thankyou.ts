import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHome } from '../../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHome
  ],
  templateUrl: './thankyou.html',
  styleUrl: './thankyou.scss'
})
export class Thankyou {

}
