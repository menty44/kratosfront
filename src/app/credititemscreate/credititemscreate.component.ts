import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";
import Swal from "sweetalert2";
let alertify = require('alertifyjs');

@Component({
  selector: 'app-credititemscreate',
  templateUrl: './credititemscreate.component.html',
  styleUrls: ['./credititemscreate.component.css']
})
export class CredititemscreateComponent implements OnInit {

  auth:boolean
  public tax:Array<any>

  constructor(private routes: Router) { }

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

  navigate = async () => {
    await this.routes.navigate(['/credit-items']);
  }

  // save(name.value, price.value, list.value, taxs.value, desc.value, credq.value, exp.value)
  save = async (name, price, list, tax, desc, credq, exp) => {

    console.log()
    console.log(name)
    console.log(price)
    console.log(list)
    console.log(tax)
    console.log(desc)
    console.log(credq)
    console.log(exp)

    axios.post('http://127.0.0.1:8000/api/credititem',
      {
        name: name,
        price: price,
        list: list,
        scheme: tax,
        description: desc,
        quantity: credq,
        expiry: exp
      }
    )
      .then(function (response) {
        console.log(response);
        if (response.data.code === 0) {
          alertify.success('New Tax Credit Item.');
          Swal.fire({
            icon: 'success',
            title: 'Yay! Success ...',
            text: 'New Credit Item created.'
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
