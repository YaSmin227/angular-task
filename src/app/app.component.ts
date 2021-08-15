import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // id:any
  // constructor(private Route:ActivatedRoute){
  //   this.id=this.Route.snapshot.params['id']
  //   console.log(this.id)
  // }
  title = 'tas-fa';
}
