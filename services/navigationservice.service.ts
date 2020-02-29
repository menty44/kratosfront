import { Injectable } from '@angular/core';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NavigationserviceService {

  private currentLocation: string = '/dashboard';

  constructor(private router: Router) { }

  setCurrentLocation(location:string){
    this.currentLocation="/"+location;
    return this;
  }

  getCurrentLocation(){
    return this.currentLocation;
  }

  navigateNow(){
    this.router.navigate([this.currentLocation]);
  }

}
