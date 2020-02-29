import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { ApiUrlsServiceService } from '../api-urls-service.service';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

let alertify = require('alertifyjs');


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(
    private apiUrlsService: ApiUrlsServiceService,
    private routes : Router,
    private data: DataService
  ) { }

  ngOnInit() {
  }

  process = (code) => {
    console.log('code from website', code);

    let self = this;

    axios.post(this.apiUrlsService.getApiEndpoint()+'8080/activate',
      { code: code, phone: localStorage.getItem('phone') })
      .then((response) => {

        if (response.data.code === '0') {
          localStorage.setItem('auth', 'true');
          console.log(response.data);

          self.data.changeMessage('true');

          self.routes.navigate(['/report']);

        }else {
          localStorage.setItem('auth', 'false');
          // self.msg ='Invalid SMS Code';
          alertify.alert('Oops!', 'Invalid Username or Password!', function () {
            alertify.error('Ok');
          });
        }

      })
      .catch(function (error) {
        console.log(error);
        localStorage.setItem('auth', 'false');
        // self.msg ='Invalid username or password';
        alertify.alert('Oops!', 'Invalid Username or Password!', function () {
          alertify.error('Ok');
        });
      });

  }
}
