import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  firstname: string = "Angular";
  lastname: string="Training";
  age:number=10;

  name="Saurabh";

  changeText()
  {
    if(this.name!="Saurabh")
    this.name="Saurabh";
    else
    this.name="saurabh_vipin"
  }
}
