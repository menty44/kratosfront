import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customercreate',
  templateUrl: './customercreate.component.html',
  styleUrls: ['./customercreate.component.css']
})
export class CustomercreateComponent implements OnInit {
  auth:boolean
  constructor(private routes: Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if (this.auth === false) {
      this.routes.navigate(['/login']);
    }
  }

  save = () => {

  }

  navigateback = () => {
    this.routes.navigate(['/rooms']);
  }

}
