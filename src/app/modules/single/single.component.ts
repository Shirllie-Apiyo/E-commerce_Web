import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  getId: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    // get ID
    this.getId = this.activatedRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    // once you get id , use it to query our api
    let API_URL = `http://127.0.0.1:5000/api/products/single/${this.getId}`
    console.log(this.getId);
    this.http.get(API_URL)
      .subscribe((data) => this.displaydata(data));

  }//end
  httpdata: any
  displaydata(data: any) {
    this.httpdata = data
    console.log(data);
  }//this data is exposed to html


}
