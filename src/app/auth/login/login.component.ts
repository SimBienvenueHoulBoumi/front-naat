import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import LoginDto from '../../../models/auth.model';
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AuthService],
  imports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    LoadingComponent,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  authService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    console.log(this.authService.authenticate());
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.authService.login(this.loginForm.value as LoginDto, e);
  }
}
