import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public o:any = new Array;
  public fun;
  constructor() { }

  ngOnInit() {

  }

  /**
   * Funkcja która pokazuje alert (o,fun). Wartośći:
   * o => obiekt - dane => type(warning,succes,normal), title, message, question;
   * fun => obiekt - co ma się wykonać + zmienna która zawiera funkcję => true, false;
   */
  show(o,fun): void {
    this.o.type = o.type;
    this.o.title = o.title;
    this.o.message = o.message;
    this.o.question = o.question;
    this.fun = fun;
    document.getElementById('type').classList.add(this.o.type);
    document.getElementById('title').classList.add(`${this.o.type}-color`);
    document.getElementById('alert').classList.remove('hidden');
  }

  userChoice(choice:boolean): void {
    switch(choice){
      case true:{
        this.fun.true();
        document.getElementById('alert').classList.add('hidden');
        break;
      }
        case false: {
        this.fun.false();
        document.getElementById('alert').classList.add('hidden');
      }
    }
  }

}
