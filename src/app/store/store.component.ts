import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

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

  navigateProd = () => {
    this.routes.navigate(['/product-items']);
  }

  navigatecredit = () => {
    this.routes.navigate(['/credit-items']);
  }

  navigateSub = () => {
    this.routes.navigate(['/subscription-items']);
  }

  navigatePromo = () => {
    this.routes.navigate(['/promotions']);
  }

}
