import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-productitemcreate',
  templateUrl: './productitemcreate.component.html',
  styleUrls: ['./productitemcreate.component.css']
})
export class ProductitemcreateComponent implements OnInit {

  auth:boolean
  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

}
