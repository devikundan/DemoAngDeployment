import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  items: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.items = this.cartService.cart(); // get latest cart
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.items.reduce(
      (sum, item) => sum + (item.price * item.qty),
      0
    );
  }

  continueToPay() {
    alert('Redirecting to payment gateway...');
  }

  backtoshoping() {
    this.router.navigate(['/products']);
  }
  increaseQty(item: any) {
    item.qty++;
    this.calculateTotal();
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.calculateTotal();
    }
  }

  // ✅ DELETE ITEM
  removeItem(item: any) {
    this.items = this.items.filter(i => i.id !== item.id);

    // 🔥 update service cart also
    this.cartService.cart.set(this.items);

    this.calculateTotal();
  }
}