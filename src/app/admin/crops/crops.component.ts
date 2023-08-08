import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {


  towns: any;
  townid: any;

  constructor(private api: ApiService) {



  }

  formdata: any;

  id = 0;
  crops: any;
  ngOnInit(): void {
    this.load();
  }

  load() {

    this.id = 0;
    this.formdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.compose([Validators.required])),


    });

    this.api.get("api/crops").subscribe((result: any) => {
      this.crops = result;
    });

  }
  Submit(data: any) {
    if (this.id == 0) {
      this.api.post("api/crops", data).subscribe((result: any) => {
        this.load();
      })
    }
    else {
      this.api.put("api/crops/" + this.id, data).subscribe((result: any) => {
        this.load();
      });
    }


  }

  edit(id: any) {

    this.id = id;
    this.api.get("api/crops/" + this.id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: this.id,
        name: result.name,

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
        this.api.delete("api/crops/" + id).subscribe((result: any) => {
          this.load();
        });
      }
    });
  }


}