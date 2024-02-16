import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

/**
 * Garde de route pour vérifier l'authentification de l'utilisateur.
 * Ce garde contrôle l'accès aux routes protégées 
 * en fonction de l'état d'authentification de l'utilisateur.
 */
export const authGuard: CanActivateFn = (
  _route,
  _state
): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const auth = inject(AuthService);

  return of(auth.authenticate()).pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        return true;
      } else {
        return router.parseUrl('/profile');
      }
    })
  );
};
