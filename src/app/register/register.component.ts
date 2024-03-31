import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: any = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  register(name: string, email: string, password: string) {
    var obj = new SignUpRequestBean(name, email, password);
    this.authService.register(obj).subscribe(
      (response) => {
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}

class SignUpRequestBean{
  name: string="";
  email: string="";
  password: string = "";
  constructor(name: string, email: string, password: string)
  {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}