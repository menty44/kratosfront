import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsServiceService {

  constructor() { }

  private API_URL = 'http://localhost:';

  getApiEndpoint() {
    return this.API_URL;
  }
}
