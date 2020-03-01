import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  public listItems:Array<any>
  constructor(private routes: Router) { }
  auth:boolean


  async ngOnInit() {

    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';

    // if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
    //   localStorage.setItem('cart', [].toString())
    // }

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

  pushCart = (name, price) => {
    console.log(name)
    console.log(price)

    let localcart = [];

    let check = localStorage.getItem('cart');
    console.log('check ', check)

    if (check === null || check.length === 0) {
      localcart.push({name: name, price: price});
      localStorage.setItem('cart', localcart)
      console.log('single ', localcart)
    }else {
      localcart.push(name, price);
      console.log('singlemu ', localcart);
      //check.push(localcart)
      console.log('multi ', localcart);
    }


  }

}
