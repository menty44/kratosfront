import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {
  auth:boolean
  newauth:boolean
  public message:string;

  @Output() messageEvents = new EventEmitter<string>();

  constructor(private routes:Router,private data: DataService) { }

  ngOnInit() {
    let a = this.data.currentMessage.subscribe(message => this.message = message);
    console.log('nini imetumwa hapa? ', a);
    // this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth = Boolean(this.message);
    console.log('recheck again? ', this.auth);
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

  logout(){
    localStorage.setItem('auth', JSON.stringify(false));
    this.routes.navigate(['/login']);
    this.data.changeMessage('false');
    this.message = 'false'

  }

  receiveEvent($event){
    console.log("hello new event "+ $event)
    this.newauth = $event;
  }
}
