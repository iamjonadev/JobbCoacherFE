import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Work } from '../../../components/work/work';
import { GetJob } from '../../../components/get-job/get-job';
import { BrowseCaregory } from '../../../components/browse-caregory/browse-caregory';
import { PopularJobTwo } from '../../../components/popular-job-two/popular-job-two';
import { Cta } from '../../../components/cta/cta';
import { Footer } from '../../../components/footer/footer';
import { Blog } from '../../../components/blog/blog';
import { BestCompaniesTwo } from '../../../components/best-companies-two/best-companies-two';

@Component({
  selector: 'app-index-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Work,
    GetJob,
    BrowseCaregory,
    PopularJobTwo,
    Cta,
    Footer,
    Blog,
    BestCompaniesTwo
  ],
  templateUrl: './index-three.html',
  styleUrl: './index-three.scss'
})
export class IndexThree {
logoImg = [
  'assets/images/company/circle-logo.png',
  'assets/images/company/android.png',
  'assets/images/company/google-logo.png',
  'assets/images/company/facebook-logo.png',
  'assets/images/company/lenovo-logo.png',
  'assets/images/company/linkedin.png',
  'assets/images/company/skype.png',
  'assets/images/company/spotify.png',
  'assets/images/company/telegram.png',
  'assets/images/company/whatsapp.png'
]
}
