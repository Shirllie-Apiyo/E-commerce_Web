import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {

    this.httpClient.get("http://127.0.0.1:5000/api/products?category=phone")
    .subscribe((data) => this.displaydata(data))

    this.httpClient.get("http://127.0.0.1:5000/api/products?category=tv")
    .subscribe((data) => this.displaydata1(data))
  }

  httpdata: any
  displaydata(data: any) {
    this.httpdata = data
    console.log(data)
  }

  httpdata1: any
  displaydata1(data: any) {
    this.httpdata1 = data
    console.log(data)
  }


}
