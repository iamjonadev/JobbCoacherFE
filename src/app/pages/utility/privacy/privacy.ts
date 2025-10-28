import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Footer
  ],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss'
})
export class Privacy {
  restrictions = [
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand'
  ]
}
