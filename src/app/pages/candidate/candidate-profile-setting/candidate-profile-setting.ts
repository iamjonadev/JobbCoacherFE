import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-candidate-profile-setting',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Navbar,
    Footer
  ],
  templateUrl: './candidate-profile-setting.html',
  styleUrl: './candidate-profile-setting.scss'
})
export class CandidateProfileSetting {

  file:any;
  file2:any;
  file3:any;

  handleChange(e:any) {
    this.file = URL.createObjectURL(e.target.files[0])
  }
  handleChange2(e:any) {
    this.file2 = URL.createObjectURL(e.target.files[0])
  }
  handleChange3(e:any) {
    this.file3 = URL.createObjectURL(e.target.files[0])
  }
}
