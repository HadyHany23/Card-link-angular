import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private link = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getall(){
    return this.http.get(this.link)
  }
}
