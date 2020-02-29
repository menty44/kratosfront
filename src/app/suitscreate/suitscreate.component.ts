import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-suitscreate',
  templateUrl: './suitscreate.component.html',
  styleUrls: ['./suitscreate.component.css']
})
export class SuitscreateComponent implements OnInit {

  public auth: boolean;

  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

  navigateback =()=> {
    this.routes.navigate(['/suits'])
  }

  save = () => {

  }

}
