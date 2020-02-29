import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {
  public auth:boolean
  constructor(private routes: Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if (this.auth === false) {
      this.routes.navigate(['/login']);
    }
  }

  save = () => {

  }

  navigate = () => {
    this.routes.navigate(['/studios/create']);
  }

}
