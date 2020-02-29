import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { DataService } from "../data.service";


@Component({
  selector: 'app-menubuttons',
  templateUrl: './menubuttons.component.html',
  styleUrls: ['./menubuttons.component.css']
})
export class MenubuttonsComponent implements OnInit {

  public message:string;


  @Output() messageEvents = new EventEmitter<string>();
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    console.log('nini ')
    this.data.currentMessage.subscribe(message => this.message = message);
    console.log('nini imetumwa hapa? ', this.message)
  }

  logout(){
    localStorage.setItem('auth', JSON.stringify(false));
    this.data.changeMessage('false');
  }


}
