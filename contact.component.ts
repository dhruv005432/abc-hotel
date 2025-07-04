import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
    submittedOn: new Date().toISOString().slice(0, 10)
  };

  constructor(private http: HttpClient) {}

  submitContact() {
    console.log("Contact submitted:", JSON.stringify(this.contact));
    alert("Thanks for contacting us!");
    this.http.post('http://localhost:3000/contacts', this.contact).subscribe(() => {
      this.contact = { name: '', email: '', message: '', submittedOn: new Date().toISOString().slice(0, 10) };
    });
  }
}
