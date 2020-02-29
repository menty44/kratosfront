import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import { NavigationserviceService } from 'services/navigationservice.service';

import { MessageBusModule, ErrorHandlingEnum, Connection, MessageBus} from 'ngx-message-bus';
import {Router} from "@angular/router";

let lucidJS = require("lucidjs");

@Component({
  selector: 'app-dashmenu',
  templateUrl: './dashmenu.component.html',
  styleUrls: ['./dashmenu.component.css']
})
export class DashmenuComponent implements OnInit {

  public auth:string;
  hubConnection: Connection;
  public message:any;
  private handleBroadcast: any;
  private myConnection: any;

  constructor(
    private handleMessage: MessageBus,
    private routes: Router,
  ) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== 'true' ? this.routes.navigate(['/login']) : '';
    this.myConnection.onBroadcast(this.handleBroadcast.bind(this));
    console.log(this.myConnection);
    const emitter = new lucidJS.EventEmitter();
    emitter.emit('foo');
    // const subscription = {
    //   groupId: 'auth',
    //   callback: this.handleMessage.bind(this)
    // };
    // this.myConnection.on(subscription);
    // console.log(this.myConnection.on(subscription));
  }

  logout(){
    localStorage.setItem('auth', JSON.stringify(false));
  }

  receiveMessage($event) {
    console.log("XXXXXXXXXXXXXX", $event);
    this.message = $event
  }
}
