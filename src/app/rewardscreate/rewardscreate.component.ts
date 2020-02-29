import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rewardscreate',
  templateUrl: './rewardscreate.component.html',
  styleUrls: ['./rewardscreate.component.css']
})
export class RewardscreateComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  save = () => {

  }

  navigateback = () => {
    this.routes.navigate(['/rooms']);
  }


}
