import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
// import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 


  isLoggedIn: boolean = false;
 
  
  constructor(private authService: AuthService,private router:Router,) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

 

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  // currentUser$ = inject(UserService).currentUser;


  // isLoggedIn = false;
  // fullName: string | undefined;


  // constructor(private authService: AuthService,private router:Router,) {}

  // ngOnInit() {
  //   this.isLoggedIn = this.authService.isAuthenticated();
  //   if (this.isLoggedIn) {
  //     this.fullName = this.authService.getUserFullName();
  //   }
  // }

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/home']);
  // }

}
