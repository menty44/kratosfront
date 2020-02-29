import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-productitems',
  templateUrl: './productitems.component.html',
  styleUrls: ['./productitems.component.css']
})
export class ProductitemsComponent implements OnInit {

  auth :boolean

  constructor(private routes:Router) { }

  async ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? await this.routes.navigate(['/login']) : '';

  }

  navigate = () => {
    this.routes.navigate(['/product-items/create'])
  }

}
