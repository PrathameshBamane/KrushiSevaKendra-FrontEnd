import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  towns: any;
  townid: any;

  constructor(private api: ApiService) {

    this.api.get("api/towns").subscribe((result: any) => {
      this.towns = result;
    })

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
      name: new FormControl("", Validators.compose([Validators.required])),
      address: new FormControl("", Validators.compose([Validators.required])),
      mobileno: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl(""),
      townid: new FormControl(0, Validators.compose([Validators.required])),

    });

    this.api.get("api/farmers").subscribe((result: any) => {
      console.log(this.farmers);
      
      this.farmers = result;
    });

  }
  Submit(data: any) {
    if (this.id == 0) {
      this.api.post("api/farmers", data).subscribe((result: any) => {
        this.load();
      })
    }
    else {
      this.api.put("api/farmers/" + this.id, data).subscribe((result: any) => {
        this.load();
      });
    }


  }

  edit(id: any) {

    this.id = id;
    this.api.get("api/farmers/" + this.id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: this.id,
        name: result.name,
        address: result.address,
        mobileno: result.mobileno,
        email: result.email,

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
        this.api.delete("api/farmers/" + id).subscribe((result: any) => {
          this.load();
        });
      }
    });
  }


}