import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Decode, Response, User } from '../interfaces/Response';
import jwtDecode from 'jwt-decode';

@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public currentUser: any;
  constructor(private _http: HttpClient) {

  }

  signup(data: User) {
    return new Promise<Response>(resolve => {
      this._http.post<Response>(environment.url + "user/signup", data).subscribe(resp => {
        resolve(resp);

      });
    });

  }

  login(data: User) {
    return new Promise<Response>(resolve => {
      this._http.post<Response>(environment.url + "user/login", data).subscribe(resp => {
        if (resp.status == "ok" && resp.token) {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('user',JSON.stringify(resp.user));
        }
        resolve(resp);
      });
    });
  }


  clearStorage(){
    localStorage.clear();
  }
  getToken() {
    return localStorage.getItem('token');

  }

  checkLogged(): boolean {
    const token = this.getToken()
    if (!token) return false

    const decoded: Decode = jwtDecode(token)
    const time = new Date().getTime()

    if (decoded.exp > Math.floor(time / 1000)) {
      return true;
    } else {
      return false;
    }
  }
}
