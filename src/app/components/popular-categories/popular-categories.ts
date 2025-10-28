import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-categories',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './popular-categories.html',
  styleUrl: './popular-categories.scss'
})
export class PopularCategories {
  @Input()rounded:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.rounded);

  }
  categoriesData = [
  {
    icon: 'uil uil-lightbulb-alt',
    title1: 'Karriär-',
    title2: 'inspiration',
    job: 'Idéer & motivation'
  },
  {
    icon: 'uil uil-rocket',
    title1: 'Framtids-',
    title2: 'möjligheter',
    job: 'Utforska nya vägar'
  },
  {
    icon: 'uil uil-heart',
    title1: 'Balans &',
    title2: 'välmående',
    job: 'Hållbar karriär'
  },
  {
    icon: 'uil uil-globe',
    title1: 'Internationell',
    title2: 'erfarenhet',
    job: 'Jobb & studier utomlands'
  },
  {
    icon: 'uil uil-puzzle-piece',
    title1: 'Kompetens-',
    title2: 'utveckling',
    job: 'Kurser & lärande'
  }
];

}
