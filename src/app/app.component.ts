import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "./data.service";
import * as d3 from "d3";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  public auth: boolean;
  newauth:boolean

  public message:string;

  @Output() messageEvents = new EventEmitter<string>();

  constructor(
    private routes:Router,
    private data: DataService
  ) { }

  ngOnInit() {
    let a = this.data.currentMessage.subscribe(message => this.message = message);
    console.log('nini imetumwa hapa? ', this.message);

    this.removeChecker(this.message);

    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';

  }

  receiveEvent($event){
    console.log("hello new event "+ $event)
    this.newauth = $event;
  }

  removeChecker = (s) => {
    if (s === false) {
      console.log('removeChecker ', s)
      d3.selectAll('.f > *').remove();

    }else {
      // console.log('removeChecker ', s)
      // d3.select('body')
      //   .selectAll('.f')
    }
  }
}
