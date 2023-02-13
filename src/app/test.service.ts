import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url='https://unsplash.com/napi/landing_pages/wallpapers/desktop/pc?page=1&per_page=100';

  constructor(private http:HttpClient) { }

  getUser(user:any){
    return this.http.get(this.url,user)
    
  }
}
