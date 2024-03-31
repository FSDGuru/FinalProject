import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  goToSuccessPage() {
    this.router.navigate(['/success']);
  }
  credentials: any = {
    username: '',
    password: '',
  };

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Handle successful login
        console.error('login successful:', response);
      },
      (error) => {
        // Handle login error
        console.error('login failed:', error);
      }
    );
  }
}
