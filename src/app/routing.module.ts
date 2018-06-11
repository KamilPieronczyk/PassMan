import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AddPasswdComponent } from './add-passwd/add-passwd.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomeComponent } from './home/home.component';
import { PasswdListComponent } from './passwd-list/passwd-list.component';

const routes: Routes = [
  { path: '', component: SignInPageComponent},
  { path: 'home', component: HomeComponent, children: [
    { path: 'addPasswd', component: AddPasswdComponent, outlet: 'content' },
    { path: 'passwdList', component: PasswdListComponent, outlet: 'content' },
  ] },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes,{ enableTracing: true })
