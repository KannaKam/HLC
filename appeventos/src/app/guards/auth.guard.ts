import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userServices: UsersService, private router: Router) { }

  canActivate() {
    if (this.userServices.checkLogged()) {
      return true;
    } else {
      this.userServices.clearStorage();
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
