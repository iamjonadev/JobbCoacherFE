import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CommonModule,
    CountUpModule
  ],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

}
