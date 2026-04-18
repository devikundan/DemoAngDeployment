// features/products/product-card.component.ts
import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  @Input() product: any;
  service = inject(ProductService);

  add() {
    console.log(this.product);
    this.service.addToCart(this.product);
  }

  constructor(private router: Router) {}

goToDetails() {
  this.router.navigate(['/products', this.product.id]);
}
}