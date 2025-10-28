import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [
    CommonModule
    // RouterLink - if needed in the template
  ],
  templateUrl: './cta.html',
  styleUrl: './cta.scss'
})
export class Cta {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
