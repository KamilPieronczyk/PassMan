import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AddPasswdComponent } from './add-passwd/add-passwd.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { HomeComponent } from './home/home.component';
import { PasswdListComponent } from './passwd-list/passwd-list.component';
import { PasswdDeleteComponent } from './passwd-delete/passwd-delete.component';
import { CreatePasswdGroupComponent } from './create-passwd-group/create-passwd-group.component';
import { NoteListComponent } from './note-list/note-list.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { EncFilesListComponent } from './enc-files-list/enc-files-list.component';
import { EncFileComponent } from './enc-file/enc-file.component';
import { CreateNoteGroupComponent } from './create-note-group/create-note-group.component';

const routes: Routes = [
  { path: 'start', component: SignInPageComponent},
  { path: 'home', component: HomeComponent, children: [
    { path: 'addPasswd', component: AddPasswdComponent, outlet: 'content' },
    { path: 'passwdList', component: PasswdListComponent, outlet: 'content' },
    { path: 'createPasswdGroup', component: CreatePasswdGroupComponent, outlet: 'content' },
    { path: 'passwdDelete', component: PasswdDeleteComponent, outlet: 'content' },
    { path: 'noteList', component: NoteListComponent, outlet: 'content' },
    { path: 'createNote', component: CreateNoteComponent, outlet: 'content' },
    { path: 'createNoteGroup', component: CreateNoteGroupComponent, outlet: 'content' },
    { path: 'encFilesList', component: EncFilesListComponent, outlet: 'content' },
    { path: 'encFile', component: EncFileComponent, outlet: 'content' },
  ] },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes,{ enableTracing: true, useHash:true })
