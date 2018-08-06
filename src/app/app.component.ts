import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: any = {};
  order: any = {};

  constructor(private http: HttpClient) {
    this.http.get<UserResponse>('http://northwind.servicestack.net/query/customers.json').subscribe(data => {
      console.log(data.Results);
      this.data = data;
    });

    this.http.get<UserResponse>('http://northwind.servicestack.net/query/orders.json').subscribe(res => {
      console.log(res.Results);
      this.order = res;
    });
  }
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
  ngOnInit(): void {

  }
}

interface UserResponse {
  Results: any;
}