import {Component, EventEmitter, NgZone, OnInit, Output} from '@angular/core';

import { RouterModule , Router } from '@angular/router';

import { MyServiceService } from 'src/app/my-service.service';

import axios from 'axios';

import { ApiUrlsServiceService } from '../api-urls-service.service';

import {MessageBusModule, ErrorHandlingEnum, Connection, MessageBus} from 'ngx-message-bus';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

import { DataService } from "../data.service";


let lucidJS = require("lucidjs");


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyServiceService]
})
export class LoginComponent implements OnInit {
  public auth:string;
  hubConnection: Connection;
  public message:any;
  private myConnection: Connection;
  count$: Observable<number>;

  @Output() test = new EventEmitter<string>();
  messages: string = "Hola Mundo!";

  constructor(private apiUrlsService: ApiUrlsServiceService,
              private messageBus: MessageBus,
              private routes : Router,
              private store: Store<{ count: number }>,
              private service : MyServiceService,
              private data: DataService
  ) {
    // @ts-ignore
    this.count$ = store.pipe(select('count'));
  }

  msg = "";

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit() {
    //this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth = JSON.stringify(false);

    // this.hubConnection.post(this.message);
    console.log(this.auth, 'login ');
    //this.data.currentMessage.subscribe(message => this.message = message)
  }

  check(uname: string, p : string)
  {

    let self = this;

    console.log(uname);
    console.log(p);

    // let output = this.service.checkusernameandpassword(uname, p);

    axios.post(this.apiUrlsService.getApiEndpoint()+'8000/api/login',
      { email: uname, password: p })
      .then(function (response) {

        console.log("")
        console.log("XXXXXXXX")
        console.log(response.data);
        console.log(response.data.code);
        console.log("")
        if (response.data.code === 0) {
          localStorage.setItem('auth', 'true');
          console.log(response.data);
          localStorage.setItem('name', JSON.stringify(response.data.credentials.email));

          self.data.changeMessage('true');

          self.test.emit(JSON.stringify({auth: true}));

          // self.myConnection = self.messageBus.connect('auth', 'auth');
          // console.log(self.myConnection, 'myConnection ');

          // const ngZone = this.injector.get(NgZone);
          // const routerService = this.injector.get(Router);

          self.routes.navigate(['/dash']);
          // ngZone.run(() => {
          //   routerService.navigate(['/report'], { skipLocationChange: true });
          // });
          //self.routes.navigate(['/report']);
        }else {
          localStorage.setItem('auth', 'false');
          self.msg ='Invalid username or password';
        }

      })
      .catch(function (error) {
        console.log(error);
        localStorage.setItem('auth', 'false');
        self.msg ='Invalid username or password';
      });

    // console.log('check the response from service ', output);
    // if(output === true) {
    //   this.routes.navigate(['/report']);
    // }else{
    //   this.msg ='Invalid username or password';
    // }
  }

}
