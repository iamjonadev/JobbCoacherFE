import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';
import { MillionsOfJob } from '../../../components/millions-of-job/millions-of-job';
import { BestCompanies } from '../../../components/best-companies/best-companies';
import { PopularJobThree } from '../../../components/popular-job-three/popular-job-three';
import { Services } from '../../../components/services/services';
import { Blog } from '../../../components/blog/blog';

@Component({
  selector: 'app-index-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Footer,
    MillionsOfJob,
    BestCompanies,
    PopularJobThree,
    Services,
    Blog
  ],
  templateUrl: './index-four.html',
  styleUrl: './index-four.scss'
})
export class IndexFour {
  logoImg = [
    "assets/images/company/shree-logo.png",
    "assets/images/company/skype.png",
    "assets/images/company/snapchat.png",
    "assets/images/company/spotify.png",
    "assets/images/company/telegram.png",
    "assets/images/company/whatsapp.png",
    "assets/images/company/android.png" ,
    "assets/images/company/facebook-logo.png",
    "assets/images/company/linkedin.png",
    "assets/images/company/google-logo.png"
  ]
}
