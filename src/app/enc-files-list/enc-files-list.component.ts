import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enc-files-list',
  templateUrl: './enc-files-list.component.html',
  styleUrls: ['./enc-files-list.component.scss']
})
export class EncFilesListComponent implements OnInit {

  constructor() { }

  rightPanelStyle: Object = {};
  clickedOutSide = 0;
  menuShow = false;

  ngOnInit() {
  }

  contextMenu($event) {    
    console.log('Menu showed');
    this.rightPanelStyle = {
      'display': 'block',
      'left':$event.clientX + 'px',
      'top':$event.clientY + 'px'
    }    
    this.menuShow = true;
    this.clickedOutSide = 0;
  }

  onClickedOutside() {
    this.clickedOutSide++; 
    if(this.clickedOutSide > 1 && this.menuShow) {
      console.log('Menu Hidden');      
      this.rightPanelStyle = {
        'display': 'none',
      } 
      this.menuShow = false;   
    }
  }

}
