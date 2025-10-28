import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHome } from '../../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-signup-success',
  standalone: true,
  imports: [CommonModule,RouterLink,BackToHome],
  templateUrl: './signup-success.html',
  styleUrl: './signup-success.scss'
})
export class SignupSuccess {
  date:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.date = new Date().getFullYear();
  }
}
