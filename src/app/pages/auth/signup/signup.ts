import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHome } from '../../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHome
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
 date:any;
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.date = new Date().getFullYear();
 }
}
