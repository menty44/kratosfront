import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scheduletryout',
  templateUrl: './scheduletryout.component.html',
  styleUrls: ['./scheduletryout.component.css']
})
export class ScheduletryoutComponent implements OnInit {

  public auth: boolean;

  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

}
