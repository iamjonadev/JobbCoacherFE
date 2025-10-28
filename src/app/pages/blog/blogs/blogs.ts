import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';
import BlogData from '../../../data/blog.json'

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Footer
  ],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class Blogs {
  blogData = BlogData
}
