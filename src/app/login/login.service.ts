import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8080/users/';
  
    login(loginPayload) {
      const headers = {
        'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
        'Content-type': 'application/x-www-form-urlencoded'
      }
      return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
    }
}