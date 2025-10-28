import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../components/navbar/navbar';
import { Work } from '../../../components/work/work';
import { BrowseCaregory } from '../../../components/browse-caregory/browse-caregory';
import { MillionsOfJob } from '../../../components/millions-of-job/millions-of-job';
import { QueAns } from '../../../components/que-ans/que-ans';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';

import JobData from '../../../data/job.json'

@Component({
  selector: 'app-index-seven',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Work,
    BrowseCaregory,
    MillionsOfJob,
    QueAns,
    ExploreJob,
    Footer
  ],
  templateUrl: './index-seven.html',
  styleUrl: './index-seven.scss'
})
export class IndexSeven {
  jobData = JobData
}
