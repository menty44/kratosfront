import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-roomscreate',
  templateUrl: './roomscreate.component.html',
  styleUrls: ['./roomscreate.component.css']
})
export class RoomscreateComponent implements OnInit {


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
