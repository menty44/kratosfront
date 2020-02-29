import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


import axios from 'axios';
let alertify = require('alertifyjs');
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productitemcreate',
  templateUrl: './productitemcreate.component.html',
  styleUrls: ['./productitemcreate.component.css']
})
export class ProductitemcreateComponent implements OnInit {

  auth:boolean
  public tax:Array<any>

  constructor(private routes:Router) { }

  async ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? this.routes.navigate(['/login']) : '';

    try {
      const response = await axios.get('http://localhost:8000/api/tax');
      console.log(response.data.data);

      this.tax = response.data.data;

    }catch (e) {

      console.log(e);

    }
  }

  navigate = () => {
    this.routes.navigate(['/product-items'])
  }

  save = (name, price, list, tax, desc) => {
    console.log()
    console.log(name)
    console.log(price)
    console.log(list)
    console.log(tax)
    console.log(desc)

    axios.post('http://127.0.0.1:8000/api/productitem',
      {
        name: name,
        price: price,
        list: list,
        scheme: tax,
        description: desc
      }
    )
      .then(function (response) {
        console.log(response);
        if (response.data.code === 0) {
          alertify.success('New Tax Product Item.');
          Swal.fire({
            icon: 'success',
            title: 'Yay! Success ...',
            text: 'New Product Item created.'
            // footer: '<a href>Why do I have this issue?</a>'
          })
        }else {
          Swal.fire({
            icon: 'error',
            title: 'Oops ...',
            text: 'Error processing the request',
            footer: '<a href>Please contact the system admin</a>'
          })
        }
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops ...',
          text: error,
          footer: '<a href>Please contact the system admin</a>'
        })
      });
  }
}
