import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-passwd',
  templateUrl: './add-passwd.component.html',
  styleUrls: ['./add-passwd.component.scss']
})
export class AddPasswdComponent implements OnInit {

  public stepp;
  value = 'Clear me';
  constructor(private router: Router) {
    this.stepp = 2;
  }

  ngOnInit() {
    
  }

  nextStepp(){
    this.stepp = 2;
    document.getElementById('one').classList.remove('selected');
    document.getElementById('two').classList.add('selected');
  }

  setPasswd(){
    console.log("Zapisano")
    this.router.navigate(['/home', {outlets: {'content': ['passwdList']}}]);
  }

}
