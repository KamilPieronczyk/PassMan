import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-passwd',
  templateUrl: './add-passwd.component.html',
  styleUrls: ['./add-passwd.component.scss']
})
export class AddPasswdComponent implements OnInit {

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
  }

  prevStepp(){
    this.stepp = 1;
    document.getElementById('one').classList.add('selected');
    document.getElementById('two').classList.remove('selected');
  }

  setPasswd(){
    console.log("Zapisano")
    this.router.navigate(['/home', {outlets: {'content': ['passwdList']}}]);
  }

}
