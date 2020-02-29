import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainingsessiontoolcreate',
  templateUrl: './trainingsessiontoolcreate.component.html',
  styleUrls: ['./trainingsessiontoolcreate.component.css']
})
export class TrainingsessiontoolcreateComponent implements OnInit {

  public auth: boolean;

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
