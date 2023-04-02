import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  prediction: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private readonly apiUrl = 'https://instapi.akshayk.dev/user/';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    const url = `${this.apiUrl}${username}`;
    return this.http.get<User>(url);
  }

}
