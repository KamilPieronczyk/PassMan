import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-passwd',
  templateUrl: './add-passwd.component.html',
  styleUrls: ['./add-passwd.component.scss']
})
export class AddPasswdComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.error("Router addPasswd działa !!!")
  }

}
