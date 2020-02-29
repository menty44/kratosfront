import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-paymentmethodcreate',
  templateUrl: './paymentmethodcreate.component.html',
  styleUrls: ['./paymentmethodcreate.component.css']
})
export class PaymentmethodcreateComponent implements OnInit {

  auth:boolean
  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

  save = () => {

  }

  navigateback = () => {
    this.routes.navigate(['/rooms']);
  }

}
