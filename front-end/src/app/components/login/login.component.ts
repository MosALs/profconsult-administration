import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService) {

  }

  username: any ;
  password: any ;
  title = 'front-end';



  ngOnInit(): void {
    // console.log('USERNAME = ', this.username);
    // console.log('PASSWORD = ', this.password);
  }

  submitLogin(username: any, password: any) {
    // console.log('USERNAME = ', username);
    // console.log('PASSWORD = ', password);
    this.authService.signin(username, password).subscribe(
      data => {

        //-------------------------------------------
        // console.log('token data = ', {data: data , decodedToken: jwtDecode(data.token)});
        //-------------------------------------------
        localStorage.setItem('token' , data.token);
        this.router.navigate(['/dashboard']);
      }, error => {
        this.toastrService.error(error.message,'Error',{
          timeOut: 3000,
        });
        // console.error(error);
      });
  }
}
