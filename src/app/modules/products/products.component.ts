import { Component, OnInit } from '@angular/core';
// import { ɵBrowserDomAdapter as BrowserDomAdapter } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // responsiveOptions;
  // //define validable to store dynamic products data
  // products:any;

  responsiveOptions:any;
  //define validable to store dynamic products data
  products:any;
  products1:any;
  products2:any;
  products3:any;



  imgCollection: any;
  constructor(
    private httpClient:HttpClient
  ) {

  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
   }

  ngOnInit(): void {

    this.httpClient.get('http://127.0.0.1:5000/api/products?category=phones').subscribe(data => {
      //data storing for use in html component
      this.products = data;
          }, error => console.error(error));

    this.httpClient.get('http://127.0.0.1:5000/api/products?category=hp').subscribe(data => {
      //data storing for use in html component
      this.products1 = data;
          }, error => console.error(error));

    this.httpClient.get('http://127.0.0.1:5000/api/products?category=fragrance').subscribe(data => {
      //data storing for use in html component
      this.products2 = data;
          }, error => console.error(error));

    this.httpClient.get('http://127.0.0.1:5000/api/products?category=games').subscribe(data => {
      //data storing for use in html component
      this.products3 = data;
          }, error => console.error(error));




    this.httpClient.get("http://127.0.0.1:5000/api/products?category=Intel")
    .subscribe((data) => this.displaydata1(data))

    this.httpClient.get("http://127.0.0.1:5000/api/products?category=mini")
    .subscribe((data) => this.displaydata2(data))

    this.httpClient.get("http://127.0.0.1:5000/api/products?category=toiletries")
    .subscribe((data) => this.displaydata3(data))

    this.httpClient.get("http://127.0.0.1:5000/api/products?category=mini")
    .subscribe((data) => this.displaydata4(data))

    this.httpClient.get("http://127.0.0.1:5000/api/products/getslider")
    .subscribe((data) => this.displaydata5(data))

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
  httpdata2: any
  displaydata2(data: any) {
    this.httpdata2 = data
    console.log(data)
  }
  httpdata3: any
  displaydata3(data: any) {
    this.httpdata3 = data
    console.log(data)
  }
  httpdata4: any
  displaydata4(data: any) {
    this.httpdata4 = data
    console.log(data)
  }

  httpdata5: any
  displaydata5(data: any) {
    this.imgCollection = data
    console.log(data)
  }


}
