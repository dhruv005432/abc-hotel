import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  booking = {
    name: '',
    date: '',
    time: '',
    guests: 1,
    contact: '',
    specialRequest: ''
  };

  constructor(private http: HttpClient) {}

  submitBooking() {
    console.log('Booking Details:', JSON.stringify(this.booking));
    alert('Your booking is submitted!');
    this.http.post('http://localhost:3000/bookings', this.booking).subscribe(res => {
      this.booking = {
        name: '', date: '', time: '', guests: 1, contact: '', specialRequest: ''
      };
    });
  }
}
