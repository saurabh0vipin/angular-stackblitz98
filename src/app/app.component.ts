import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

   f_name:string;
   l_name:string;
  onSubmit(signupform)
  {
    this.f_name=signupform.value['first_name'];
    this.l_name=signupform.value['last_name'];
  }
}
