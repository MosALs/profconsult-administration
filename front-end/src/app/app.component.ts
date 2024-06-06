import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

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
    this.authService.signin(username, password).subscribe(
      data =>  console.log('data = ', data) 
    );

  }

}
