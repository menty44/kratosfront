import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import axios from 'axios';
let alertify = require('alertifyjs');
import Swal from 'sweetalert2'

@Component({
  selector: 'app-promotionscreate',
  templateUrl: './promotionscreate.component.html',
  styleUrls: ['./promotionscreate.component.css']
})
export class PromotionscreateComponent implements OnInit {

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
    this.routes.navigate(['/promotions'])
  }

  save = (payment, exp, q , name, addinfo) => {
    console.log()
    console.log(payment)
    console.log(exp)
    console.log(q)
    console.log(name)
    console.log(addinfo)

    axios.post('http://127.0.0.1:8000/api/promotions',
      {
        payment: payment,
        expiry: exp,
        quantity: q,
        additionalinfo: addinfo,
        name: name
      }
    )
      .then(function (response) {
        console.log(response);
        if (response.data.code === 0) {
          alertify.success('New Tax Promotion Created.');
          Swal.fire({
            icon: 'success',
            title: 'Yay! Success ...',
            text: 'New Promotion Created.'
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
