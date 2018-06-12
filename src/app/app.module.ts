import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomeComponent } from './home/home.component';

import { routingModule } from "./routing.module";
import { AddPasswdComponent } from './add-passwd/add-passwd.component';
import { PasswdListComponent } from './passwd-list/passwd-list.component';
import { PasswdDeleteComponent } from './passwd-delete/passwd-delete.component';
import { CreatePasswdGroupComponent } from './create-passwd-group/create-passwd-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    HomeComponent,
    AddPasswdComponent,
    PasswdListComponent,
    PasswdDeleteComponent,
    CreatePasswdGroupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
