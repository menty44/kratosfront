import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-productitems',
  templateUrl: './productitems.component.html',
  styleUrls: ['./productitems.component.css']
})
export class ProductitemsComponent implements OnInit {

  public auth :boolean
  public listItems:Array<any>

  constructor(private routes:Router) { }

  async ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? await this.routes.navigate(['/login']) : '';

    try {
      const response = await axios.get('http://localhost:8000/api/allproductitem');
      console.log(response.data.data);

      this.listItems = response.data.data;

      let list = [];
      for (let i=0; i < response.data.data.length; i++){
        console.log(i)
        console.log(response.data.data[i].name)
        console.log(response.data.data[i].id)
        console.log(response.data.data[i].percent)
        let l = [response.data.data[i].name, response.data.data[i].percent]
        list.push(l);
      }

      let fin = '['+JSON.stringify(list)+']';
      localStorage.setItem('tax', fin);

    } catch (error) {
      console.error(error);
    }

  }

  navigate = () => {
    this.routes.navigate(['/product-items/create'])
  }

}
