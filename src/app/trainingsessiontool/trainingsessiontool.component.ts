import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainingsessiontool',
  templateUrl: './trainingsessiontool.component.html',
  styleUrls: ['./trainingsessiontool.component.css']
})
export class TrainingsessiontoolComponent implements OnInit {
  public auth: boolean;

  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

  save = () => {

  }

  navigate = () => {
    this.routes.navigate(['/rooms']);
  }

}
