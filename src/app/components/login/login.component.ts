import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };

  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submitLogin(): void {
    this.as
      .login(this.user)
      .then((data) => {
        console.log(data.user.email);
        this.as.setLoggedIn(true);
        this.router.navigateByUrl('home');
      })
      .catch((err) => {
        alert('Wrong email or password');
        this.user = { email: '', password: '' };
      });
  }

  submitLoginWithGoogle() {
    this.as
      .loginWithGoogle()
      .then(() => {
        this.router.navigateByUrl('home');
        this.as.setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        alert('Cant conect to gmail acount');
        this.user = { email: '', password: '' };
      });
  }
}
