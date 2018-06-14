import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwd-delete',
  templateUrl: './passwd-delete.component.html',
  styleUrls: ['./passwd-delete.component.scss']
})
export class PasswdDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  passwdDelete(){
   document.getElementById('alert').classList.add('hidden');
   console.log("Hasło zostało usunięte");
  }

  showAlert(){
    document.getElementById('alert').classList.remove('hidden');
  }

  closeAlert(){
    document.getElementById('alert').classList.add('hidden');
    console.log("Anulowano");
  }
  

}
