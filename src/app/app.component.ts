import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'KrushiSevaKendara';

  // posts:any;

  // constructor(private ApiService:ApiService) {}

  // ngOnInit() {
  //     this.ApiService.get()
  //       .subscribe(response => {
  //         this.posts = response;
  //       });
  // }
}