import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { DataService } from "../data.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public auth: boolean;
  constructor(
    private routes : Router,
    private data: DataService
  ) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.auth != true ? this.routes.navigate(['/login']) : '';
    this.data.changeMessage('false');
  }

}
