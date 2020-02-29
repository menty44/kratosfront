import { Injectable } from '@angular/core';

import axios from 'axios';

import { ApiUrlsServiceService } from './api-urls-service.service';
import { Key } from 'protractor';
const superagent = require('superagent');

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  key: string = 'userLoggedIn';

  public userLoggedIn: boolean = false;

  headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  constructor(private apiUrlsService: ApiUrlsServiceService) { }

  checkusernameandpassword(uname: string, pwd : string){

    let self = this;

    console.log(uname);
    console.log(pwd);

     // axios.post(this.apiUrlsService.getApiEndpoint()+'8080/signin',
     //  { phone: uname, password: pwd })
     //  .then(function (response) {
     //
     //    console.log(response.data);
     //
     //    return self.userLoggedIn = true;
     //  })
     //  .catch(function (error) {
     //    console.log(error);
     //    return self.userLoggedIn = false;
     //  });
    localStorage.setItem('auth', JSON.stringify(self.userLoggedIn));
    return self.userLoggedIn;
  }
}
