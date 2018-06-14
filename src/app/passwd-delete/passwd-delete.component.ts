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

  passwdDelete() {
   this.Alert.passwdDelete();
  }

  showAlert() {
    this.Alert.showAlert();
  }

  closeAlert() {
    this.Alert.closeAlert();
  }

}
