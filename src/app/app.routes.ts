import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { tokenGuard } from '../guards/token.guard';
import { authGuard } from '../guards/auth.guard';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
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
    path: 'newtask',
    component: CreateNewTaskComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    canActivate: [tokenGuard],
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },
];
