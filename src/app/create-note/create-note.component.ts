import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNote(){
    console.log("Notatka dodana")
  }

  addGroup(){
    console.log("Grupa dodana")
  }

  end(){
    console.log('Zakończono')
  }

}
