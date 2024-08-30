// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../interfaces/auth";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  getUserFullName(): string | undefined {
    throw new Error('Method not implemented.');
  }
  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }

  

  private baseUrl = 'http://localhost:3000';
  

  constructor(private http: HttpClient,
    private router:Router,
  ) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmail(email:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }


}
