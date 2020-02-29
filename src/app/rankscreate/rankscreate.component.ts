import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rankscreate',
  templateUrl: './rankscreate.component.html',
  styleUrls: ['./rankscreate.component.css']
})
export class RankscreateComponent implements OnInit {

  auth :boolean
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
