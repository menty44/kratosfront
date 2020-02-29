import { Component, OnInit } from '@angular/core';
import axios from "axios";

import { ApiUrlsServiceService } from '../api-urls-service.service';
import {Router} from "@angular/router";

let alertify = require('alertifyjs');


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email_error:string;

  constructor(
    private apiUrlsService: ApiUrlsServiceService,
    private routes : Router,
  ) { }

  ngOnInit() {
  }

  register = (email, phone, password) => {
    if (!email.includes('@')) {
      return this.email_error = "Please put a valid email"
    }

    if (email && password && phone) {
      console.log(email);
      console.log(phone);
      console.log(password);

      let prefix = '+254';

      if (phone.startsWith('254')) {

        let a = phone.substr(3);
        this.process(email, prefix+a, password);

      }else if (phone.startsWith('+254')) {

        let a = phone.substr(4);
        this.process(email, prefix+a, password);

      }else if (phone.startsWith('0')) {

        let a = phone.substr(1);
        this.process(email, prefix+a, password);

      }else {

        alertify.alert('Oops!', 'Invalid Phone Number!', function(){
          alertify.success('Ok');
        });

      }
    }else {

      alertify.alert('Oops!', 'Please fill all the fields!', function(){
        alertify.success('Ok');
      });

    }

  };

  process = (email, phone, pass) => {
    localStorage.setItem('phone', phone);
    let self = this;
    axios.post(this.apiUrlsService.getApiEndpoint()+'8080/signup',
      { email: email, phone: phone, password: pass})
      .then(function (response) {

        if (response.data.code === '0') {

          self.routes.navigate(['/verify']);

        } else {
          alertify.alert('Oops!', 'Invalid Username or Password!', function () {
            alertify.error('Ok');
          });
        }

      }).catch((error)=>{
      console.log(error);
    })

  }

}
