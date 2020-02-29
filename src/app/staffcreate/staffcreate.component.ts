import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


import axios from 'axios';
let alertify = require('alertifyjs');
import Swal from 'sweetalert2'

@Component({
  selector: 'app-staffcreate',
  templateUrl: './staffcreate.component.html',
  styleUrls: ['./staffcreate.component.css']
})
export class StaffcreateComponent implements OnInit {

  public auth: boolean;
  listAccTypes: Array<any>;

  constructor(private routes:Router) { }

  async ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? await this.routes.navigate(['/login']) : '';

    try {
      const response = await axios.get('http://localhost:8000/api/acctypes');
      console.log(response.data.data);

      this.listAccTypes = response.data.data;

    }catch (e) {

      console.log(e);

    }

  }

  save = (fname, lname, sel1, sel2, email, phone, dob) => {

    console.log(fname)
    console.log(lname)
    console.log(sel1)
    console.log(sel2)
    console.log(email)
    console.log(phone)
    console.log(dob)

    axios.post('http://127.0.0.1:8000/api/staff',
      {
        firstname: fname,
        lastname: lname,
        gender: sel1,
        dob: dob,
        email: email,
        phone: phone,
        accountype: sel2
      }
    )
      .then(function (response) {
        console.log(response);
        if (response.data.code === 0) {
          alertify.success('New Staff Created.');
          Swal.fire({
            icon: 'success',
            title: 'Yay ...',
            text: 'New Staff Created'
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
    this.routes.navigate(['/staff']);
  }


}
