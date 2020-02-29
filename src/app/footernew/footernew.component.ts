import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footernew',
  templateUrl: './footernew.component.html',
  styleUrls: ['./footernew.component.css']
})
export class FooternewComponent implements OnInit {
  auth:boolean
  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if (this.auth === false) {
      this.routes.navigate(['/login']);
    }
  }

}
