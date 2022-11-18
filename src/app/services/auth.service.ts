import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoogedIn: boolean = false;

  constructor(private auth: Auth, private router: Router) {}

  login(user: User): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  register(user: User): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  loginWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(): Promise<void> {
    this.router.navigateByUrl('login');
    return this.auth.signOut();
  }
  setLoggedIn(value: boolean): void {
    sessionStorage.setItem('isLoggedIn', '' + value);
  }
  getLoggedIn(): boolean {
    return this.isLoogedIn;
  }
}
