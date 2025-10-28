import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../components/navbar/navbar';
import { Counter } from '../../../components/counter/counter';
import { PopularJobTwo } from '../../../components/popular-job-two/popular-job-two';
import { BrowseCaregory } from '../../../components/browse-caregory/browse-caregory';
import { BestCompaniesTwo } from '../../../components/best-companies-two/best-companies-two';
import { Blog } from '../../../components/blog/blog';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-index-eight',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Counter,
    PopularJobTwo,
    BrowseCaregory,
    BestCompaniesTwo,
    Blog,
    Footer
  ],
  templateUrl: './index-eight.html',
  styleUrl: './index-eight.scss'
})
export class IndexEight {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
