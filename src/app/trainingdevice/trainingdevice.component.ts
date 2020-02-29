import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainingdevice',
  templateUrl: './trainingdevice.component.html',
  styleUrls: ['./trainingdevice.component.css']
})
export class TrainingdeviceComponent implements OnInit {
  public auth: boolean;

  constructor(private routes:Router) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';
  }

  save = () => {

  }

  navigateback = () => {
    this.routes.navigate(['/training-devices']);
  }

  navigate = () => {
    this.routes.navigate(['/training-devices/create']);
  }


}
