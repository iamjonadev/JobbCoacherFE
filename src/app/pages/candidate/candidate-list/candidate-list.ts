import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';
import Candidate from '../../../data/candidate.json'
@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    ExploreJob,
    Footer
  ],
  templateUrl: './candidate-list.html',
  styleUrl: './candidate-list.scss'
})
export class CandidateList {
 candidate = Candidate
}
