import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  username: any = "mohamed";
  password: any = "12345";
  title = 'front-end';



  ngOnInit(): void {
    console.log('USERNAME = ', this.username);
    console.log('PASSWORD = ', this.password);
  }

  submitLogin(username: any, password: any) {
    console.log('USERNAME = ', username);
    console.log('PASSWORD = ', password);
  }

}
