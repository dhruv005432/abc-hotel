import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {
  specials: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getSpecials().subscribe((data: any) => {
      this.specials = data;
      console.log('🌟 Specials Loaded:', data);
    });
  }

  orderNow(item: any): void {
    const order = {
      ...item,
      time: new Date().toLocaleString(),
      source: "Specials"
    };

    const jsonStr = JSON.stringify(order);
    console.log("Special Order JSON:", jsonStr);
    debugger;
    localStorage.setItem("specialOrder", jsonStr);

    this.menuService.placeOrder(order).subscribe(() => {
      alert(`✅ Special Ordered: ${item.name} (₹${item.price})`);
    });
  }
}
