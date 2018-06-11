import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
      const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: '1', component: SignInPageComponent},
      ];
    }

  ngOnInit() {
  }

  openTest() {
    this.router.navigate(['1']);
  }

}
