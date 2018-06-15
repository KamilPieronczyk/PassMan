import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  passwdDelete() {
    document.getElementById('alert').classList.add('hidden');
    console.log('Hasło zostało usunięte');
   }

   showAlert() {
     document.getElementById('alert').classList.remove('hidden');
   }

   closeAlert() {
     document.getElementById('alert').classList.add('hidden');
     console.log('Anulowano');
   }

}