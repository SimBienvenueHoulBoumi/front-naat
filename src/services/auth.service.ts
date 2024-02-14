import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import LoginDto from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApiUrl = 'http://localhost:4000/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginForm: LoginDto, e: Event): void {
    e.preventDefault();
    this.http
      .post<{ access_token: string }>(`${this.authApiUrl}/login`, loginForm)
      .subscribe((response: { access_token: string }) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/profile']);
      });
  }
}
