import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  form: FormGroup
  getId: any
  constructor(
    public fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {

      this.getId = this.activatedRoute.snapshot.paramMap.get("id")
      this.form = this.fb.group({
        message: [''],
        id: [this.getId],
        rating:['0']

        // todo client validation
      });
    // get ID

  }

  errormessage: any
  successmessage: any

  submitForm() {
    this.http.post<any>('http://127.0.0.1:5000/api/products/review', {
      "message": this.form.get("message")!.value,
      "id": this.form.get("id")!.value,
      "rating": this.form.get("rating")!.value




    }).subscribe({
      next: data => {
        // success
        this.successmessage = "Message Saved Successfully, Thank you"
      },
      error: errors => {
        //handle errors
        this.errormessage = errors.error.first_name;


      }
    })
  }//end submit

  ngOnInit(): void {


    // this.form = this.fb.group({

    // })
    // once you get id , use it to query our api
    let API_URL = `http://127.0.0.1:5000/api/products/single/${this.getId}`
    console.log(this.getId);
    this.http.get(API_URL)
      .subscribe((data) => this.displaydata(data));


      let API_URL1 = `http://127.0.0.1:5000/api/products/findreviews/${this.getId}`
    console.log("this"+this.getId);
    console.log("this"+API_URL1);
    this.http.get(API_URL1)
      .subscribe((data) => this.displaydata1(data)
      );

  }//end
  httpdata: any
  displaydata(data: any) {
    this.httpdata = data
    console.log(data);
  }//this data is exposed to html


  httpdata1: any
  empty: any
  displaydata1(data: any) {
    if (data.length == 0){
        this.empty = "No reviews"
    }

    else {
    this.httpdata1 = data
    console.log("review: "+data);
    }
  }//this

}


// seearch by id return messages
// search by id get average of rating
