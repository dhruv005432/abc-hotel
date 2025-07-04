import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/menu').subscribe((data: any) => {
      this.menuItems = data;
      console.log('Loaded Menu:', data);
    });
  }

  orderNow(item: any) {
    const orderJSON = JSON.stringify(item);
    localStorage.setItem('order', orderJSON);
    console.log('Order Now:', orderJSON);
    debugger;
    alert(`✅ Order Placed: ${item.name} - ₹${item.price}`);
  }
}
