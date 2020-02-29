import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
// import * as Http from "http";

// import 'rxjs/add/operator/map';
// import axios from 'axios';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {



  public auth: boolean;

  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

  navigate = () => {
    this.routes.navigate(['/rooms/create']);
  }



}
