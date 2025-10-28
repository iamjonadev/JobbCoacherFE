import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { ExploreJob } from '../../../components/explore-job/explore-job';
import { Footer } from '../../../components/footer/footer';

import BlogData from '../../../data/blog.json'

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    // ExploreJob, - Temporarily removed
    Footer
  ],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetail {
blogData = BlogData

social = [
  "facebook","instagram","twitter","linkedin","github","youtube","gitlab"
]

constructor(private route:ActivatedRoute){}

id:any;
data:any;
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.data = this.blogData.find((item:any)=>item.id === parseInt(this.id));
}
}
