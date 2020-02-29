import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {DataService} from "../data.service";


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  newauth:string

  dataSource: Object;
  public message:string;

  @Output() messageEvents = new EventEmitter<string>();

  title = 'Test Chart'

  // Preparing the chart data
   chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];

  constructor(
    private routes : Router,
    private data: DataService) { }

  receiveEvent($event){
    console.log("hello new event "+ $event)
    this.newauth = $event;
  }

  ngOnInit() {
    // let a = this.data.currentMessage.subscribe(message => this.message = message);
    // console.log('nini imetumwa hapa? ', a);
    // a !== true ? '' : this.routes.navigate(['/login']);
    // Chart Configuration
    const dataSource = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
        subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
        xAxisName: "Country", //Set the x-axis name
        yAxisName: "Reserves (MMbbl)", //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion" //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: this.chartData
    };

    this.dataSource = dataSource;
  }

}
