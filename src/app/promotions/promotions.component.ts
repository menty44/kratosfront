import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  public listItems:Array<any>
  auth:boolean

  constructor(private routes: Router) { }

  async ngOnInit() {

    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';

    try {
      const response = await axios.get('http://localhost:8000/api/promotions');
      console.log(response.data.data);

      this.listItems = response.data.data;

    }catch (e) {

      console.log(e);

    }

  }

  navigate = async () => {
    await this.routes.navigate(['/promotions/create']);
  }

}
