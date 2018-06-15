import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from './../alert/alert.component';

@Component({
  selector: 'app-passwd-delete',
  templateUrl: './passwd-delete.component.html',
  styleUrls: ['./passwd-delete.component.scss']
})
export class PasswdDeleteComponent implements OnInit {
  @ViewChild(AlertComponent) Alert: AlertComponent;

  constructor() { }

  ngOnInit() {
  }

  showAlert() {

    let funTrue = function(){
      console.log("Hasło usunięte");
    }

    let funFalse = function(){
      console.log("Hasło nie zostało usunięte");
    }

    let fun = {
      true: funTrue,
      false: funFalse
    };

    let option = {
      type: 'warning',
      title: 'Uwaga działa!',
      message: 'Wykonanie tej czynnosci spowoduje trwale usuniecie tego hasla.',
      question: 'Czy chcesz kontynuowac?'
    }
    this.Alert.show(option,fun);
  }

}
