import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  imgPath='../assets/download.png'
  diffImg='../assets/flower.png'
  NotValid:boolean = false;
  isValid()
  {
    return true;
  }
  onClick()
  {
    alert("Button Clicked!!")
  }
  isAdmin:boolean=true;
}
