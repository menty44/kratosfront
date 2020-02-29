import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth:boolean
  firstname = JSON.parse(localStorage.getItem('name'))

  public message:string;

  @Output() messageEvents = new EventEmitter<string>();

  constructor(public routes:Router, private data: DataService) { }

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if (this.auth === false) {
      this.routes.navigate(['/login']);
    }
    this.data.currentMessage.subscribe(message => this.message = message);
    console.log('nini imetumwa hapa? ', this.message)
  }

}
