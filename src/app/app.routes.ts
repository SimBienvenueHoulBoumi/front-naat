import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { tokenGuard } from '../guards/token.guard';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [authGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [authGuard],
      },
      {
        path: '**',
        redirectTo: '/page-not-found',
      },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];
