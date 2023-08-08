import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata: any;


  constructor(private api: ApiService, private route: Router, private activatedroute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  submit(data: any) {

    this.api.post("api/authentication/login", data).subscribe((result: any) => {
      console.log(result);
      if (result.length > 0) {
        localStorage.setItem("username", result[0].username)
        localStorage.setItem("password", result[0].password)
        this.route.navigate(['/admin']);
      }
      else {
        alert("Login Unsuccessfull");
      }



    })
  }

}