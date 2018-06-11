import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  switchMainContent(path = '') {
    this.router.navigate(['/home', {outlets: {'content': [path]}}])
  }

}
