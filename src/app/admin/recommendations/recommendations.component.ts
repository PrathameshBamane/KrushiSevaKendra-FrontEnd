import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  towns: any;
  townid: any;
  recommendations: any;

  constructor(private api: ApiService) {



  }

  formdata: any;
  farmers: any;
  id = 0;
  ngOnInit(): void {
    this.load();
  }

  load() {

    this.id = 0;
    this.formdata = new FormGroup({
      id: new FormControl(0),
      rdate: new FormControl("", Validators.compose([Validators.required])),
      farmerid: new FormControl("", Validators.compose([Validators.required])),
      cropid: new FormControl("", Validators.compose([Validators.required])),
      message: new FormControl(""),


    });

    this.api.get("api/recommendations").subscribe((result: any) => {
      this.recommendations = result;
    });

  }
  Submit(data: any) {
    if (this.id == 0) {
      this.api.post("api/recommendations", data).subscribe((result: any) => {
        this.load();
      })
    }
    else {
      this.api.put("api/recommendations/" + this.id, data).subscribe((result: any) => {
        this.load();
      });
    }


  }

  edit(id: any) {

    this.id = id;
    this.api.get("api/recommendations/" + this.id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: this.id,
        rdate: result.name,
        farmerid: result.address,
        cropid: result.mobileno,
        message: result.email,

      });
      // this.editdata = result.data.name;
    });

  }

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("api/recommendations/" + id).subscribe((result: any) => {
          this.load();
        });
      }
    });
  }



}