import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import LoginDto from '../models/auth.model';
import ProfileDto from '../models/profile.model';
import { Observable } from 'rxjs';

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

  authenticate(): boolean {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token; // Utilisation de la double négation pour convertir la valeur en un booléen
    }
    return false; // Retourne false si localStorage n'est pas pris en charge
  }

  getProfile(): Observable<ProfileDto> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.get<ProfileDto>(`http://localhost:4000/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      // Retourne un observable vide si aucun token n'est trouvé
      return new Observable<ProfileDto>();
    }
  }
}
