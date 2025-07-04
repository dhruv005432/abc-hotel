import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    identifier: '', // can be email or contact
    password: ''
  };

  constructor(private http: HttpClient) {}

  login() {
    debugger; // for debugging
    this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(u =>
        (u.email === this.loginData.identifier || u.contact === this.loginData.identifier) &&
        u.password === this.loginData.password
      );

      if (user) {
        alert('Login successful!');
        console.log('Logged in:', JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(user)); // optional local storage
      } else {
        alert('Invalid email/contact or password.');
      }
    });
  }
}
