import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-suits',
  templateUrl: './suits.component.html',
  styleUrls: ['./suits.component.css']
})
export class SuitsComponent implements OnInit {
  public auth: boolean;

  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

  save = () => {

  }

  navigate = () => {
    this.routes.navigate(['/suits/create']);
  }

}
