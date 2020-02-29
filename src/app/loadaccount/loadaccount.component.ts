import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-loadaccount',
  templateUrl: './loadaccount.component.html',
  styleUrls: ['./loadaccount.component.css']
})
export class LoadaccountComponent implements OnInit {

  public auth:boolean;

  constructor(
    private routes:Router,
    private data:DataService
  ) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
    this.data.changeMessage('false');  }

}
