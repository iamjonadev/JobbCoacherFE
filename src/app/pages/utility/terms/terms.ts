import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Accordian } from '../../../components/accordian/accordian';
import { Footer } from '../../../components/footer/footer';
import { Navbar } from "../../../components/navbar/navbar";

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Accordian,
    Footer,
    Navbar
],
  templateUrl: './terms.html',
  styleUrl: './terms.scss'
})
export class Terms {
restrictions = [
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand',
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand'
]
}
