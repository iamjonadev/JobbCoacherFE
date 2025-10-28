import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { ExploreJob } from '../../components/explore-job/explore-job';
import { Footer } from '../../components/footer/footer';
import { Services } from '../../components/services/services';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    ExploreJob,
    Footer,
    Services
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {

}
