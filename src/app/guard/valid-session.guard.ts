import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidSessionGuard implements CanActivate {
  canActivate() {
    if (!sessionStorage.getItem('id')) {
      return false;
    }
    return true;
  }

}
