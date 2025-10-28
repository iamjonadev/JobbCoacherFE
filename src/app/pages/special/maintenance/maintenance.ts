import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHome } from '../../../components/back-to-home/back-to-home';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    CommonModule,
    BackToHome
  ],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.scss'
})
export class Maintenance {
   minutes: number = 59;   // start at 59 minutes
  seconds: number = 59;   // start at 59 seconds
  private interval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private startTimer(): void {
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  private updateTimer(): void {
    if (this.seconds > 0) {
      this.seconds--;
    } else {
      if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        // Timer expired
        clearInterval(this.interval);
      }
    }
  }
}
