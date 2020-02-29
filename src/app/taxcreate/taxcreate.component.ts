import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import axios from 'axios';
let alertify = require('alertifyjs');
import Swal from 'sweetalert2'



@Component({
  selector: 'app-taxcreate',
  templateUrl: './taxcreate.component.html',
  styleUrls: ['./taxcreate.component.css']
})
export class TaxcreateComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  save = (name, number) => {
    axios.post('http://127.0.0.1:8000/api/tax', {
      name: name,
      percent: number
    })
        .then(function (response) {
          console.log(response);
          if (response.data.code === 0) {
            alertify.success('New Tax Created.');
            Swal.fire({
              icon: 'success',
              title: 'Yay ...',
              text: 'New Tax Created'
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

  navigateback = () => {
    this.routes.navigate(['/tax-scheme']);
  }

}
