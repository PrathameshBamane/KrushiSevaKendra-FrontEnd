import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7055/";

  get(url: string) {
    return this.http.get(this.baseurl + url, { headers: this.getHeader() })
  }

  post(url: string, data: any) {
    return this.http.post(this.baseurl + url, data, { headers: this.getHeader() })
  }

  put(url: string, data: any) {
    return this.http.put(this.baseurl + url, data, { headers: this.getHeader() })
  }

  delete(url: string) {
    return this.http.delete(this.baseurl + url, { headers: this.getHeader() })
  }

  getHeader() {
    var reqHeader = new HttpHeaders({
      'contact-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    });
    return reqHeader;
  }


}