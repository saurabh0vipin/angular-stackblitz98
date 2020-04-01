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
  val1:number;
  val2:number;
sum1:number;

v1:number;
v2:number;
sum2:number;
add()
{
  this.sum1=this.val1+this.val2;
}
add2()
{
  this.sum2=this.v1+this.v2;
}
  changeText()
  {
    if(this.name!="Saurabh")
    this.name="Saurabh";
    else
    this.name="saurabh_vipin"
  }
}
