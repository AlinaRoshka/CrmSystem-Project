import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  user: User = {
    name: '',
    imageUrl: '',
    email: '',
    password: '',
  };

  constructor(private as: AuthService) {}

  ngOnInit(): void {}

  singOut() {
    this.as.setLoggedIn(false)
    return this.as.logout();
  }
}
