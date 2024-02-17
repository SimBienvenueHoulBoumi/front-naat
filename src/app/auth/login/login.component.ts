import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import LoginDto from '../../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AuthService],
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(e: Event) {
    e.preventDefault();
    this.authService.login(this.loginForm.value as LoginDto, e);
  }
}
