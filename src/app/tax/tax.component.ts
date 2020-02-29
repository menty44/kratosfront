import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import axios from 'axios';
// const axios = require('axios').default;

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {

  mytax = []
  public auth:boolean

  constructor(private routes: Router) { }

  async ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if (this.auth === false) {
      this.routes.navigate(['/login']);
    }
     console.log("axios check")

    try {
      const response = await axios.get('http://localhost:8000/api/tax');
      console.log(response.data.data);

      this.mytax = response.data.data;

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

    $(document).ready(function() {
      $('#example').DataTable();
    } );
  }

  save = () => {

  }

  navigate = () => {
    this.routes.navigate(['/tax-scheme/create']);
  }

}
