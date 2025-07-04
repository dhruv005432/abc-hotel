import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    age: number | null;
    email: string;
    password: string;
    confirmPassword?: string;
    contact: string;
  } = {
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    age: null,
    email: '',
    password: '',
    confirmPassword: '',
    contact: ''
  };

  constructor(private http: HttpClient) {}

  calculateAge() {
    if (this.user.dob) {
      const dob = new Date(this.user.dob);
      const diff = Date.now() - dob.getTime();
      const ageDt = new Date(diff);
      this.user.age = Math.abs(ageDt.getUTCFullYear() - 1970);
    }
  }

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { ...this.user };
    delete newUser.confirmPassword;

    this.http.post('http://localhost:3000/users', newUser).subscribe(() => {
      alert('Registration successful!');
      this.user = {
        firstName: '', middleName: '', lastName: '',
        dob: '', age: null, email: '', password: '',
        confirmPassword: '', contact: ''
      };
    });
  }
}
