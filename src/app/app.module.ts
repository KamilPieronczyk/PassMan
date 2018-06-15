import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomeComponent } from './home/home.component';

import {MatSelectModule} from '@angular/material/select';

import { routingModule } from './routing.module';
import { AddPasswdComponent } from './add-passwd/add-passwd.component';
import { PasswdListComponent } from './passwd-list/passwd-list.component';
import { PasswdDeleteComponent } from './passwd-delete/passwd-delete.component';
import { CreatePasswdGroupComponent } from './create-passwd-group/create-passwd-group.component';
import { NoteListComponent } from './note-list/note-list.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { EncFilesListComponent } from './enc-files-list/enc-files-list.component';
import { EncFileComponent } from './enc-file/enc-file.component';
import { CreateNoteGroupComponent } from './create-note-group/create-note-group.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    HomeComponent,
    AddPasswdComponent,
    PasswdListComponent,
    PasswdDeleteComponent,
    CreatePasswdGroupComponent,
    NoteListComponent,
    CreateNoteComponent,
    EncFilesListComponent,
    EncFileComponent,
    CreateNoteGroupComponent,
    AlertComponent
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
    routingModule,
    MatSelectModule,
    MatProgressBarModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
