import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note-group',
  templateUrl: './create-note-group.component.html',
  styleUrls: ['./create-note-group.component.scss']
})
export class CreateNoteGroupComponent implements OnInit {
  public stepp;
  constructor(private router: Router) {
    this.stepp = 1;
   }

  ngOnInit() {
  }

  nextStepp(){
    this.stepp = 2;
    document.getElementById('one').classList.remove('selected');
    document.getElementById('two').classList.add('selected');
    document.getElementById('sr').classList.add('second-stepp');
  }
  
  prevStepp(){
    this.stepp = 1;
    document.getElementById('one').classList.add('selected');
    document.getElementById('two').classList.remove('selected');
    document.getElementById('sr').classList.remove('second-stepp');
  }

  createGroup(){
    console.log("Zapisano")
    this.router.navigate(['/home', {outlets: {'content': ['passwdList']}}]);
  }


}
