import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-studioscreate',
  templateUrl: './studioscreate.component.html',
  styleUrls: ['./studioscreate.component.css']
})
export class StudioscreateComponent implements OnInit {
  auth :boolean
  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if (this.auth === false) {
      this.routes.navigate(['/login']);
    }
  }

}
