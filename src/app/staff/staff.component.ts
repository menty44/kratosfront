import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  public auth: boolean;
  allstaff:Array<any>
  public single:object

  constructor(private routes:Router) { }

  async ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth !== true ? await this.routes.navigate(['/login']) : '';

    const response = await axios.get('http://localhost:8000/api/allstaff');
    console.log(response.data.data);

    this.allstaff = response.data.data;
  }

  navigate(){
    this.routes.navigate(['/staff/create']);
  }

  viewById = async (id) => {
    const response = await axios.get('http://localhost:8000/api/allstaff/'+id);
    console.log(response.data);
    this.single = response.data
  }
}
