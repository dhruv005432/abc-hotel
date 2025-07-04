import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get(`${this.baseUrl}/menu`);
  }

  placeOrder(order: any) {
    return this.http.post(`${this.baseUrl}/orders`, order);
  }

  getSpecials() {
    return this.http.get(`${this.baseUrl}/specials`);
  }
}