import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SearchComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // ✅ FIXED (styleUrl → styleUrls)
})
export class ProductsComponent implements OnInit {

  private service = inject(ProductService);

  searchText = signal<string>('');

  products = this.service.products; // ✅ must be a signal in service
  cart = this.service.cart;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.service.loadProducts();
  }

  navigateToCart(): void {
    console.log('Navigating to cart');
    this.router.navigate(['/cart-item']);
  }

  onSearch(value: string): void {
    console.log('Search value:', value); // ✅ Debug
    this.searchText.set(value);
  }

  // ✅ CLEAN + SAFE FILTER
  filteredProducts = computed(() => {
    const search = this.searchText().toLowerCase().trim();
    const allProducts = this.products(); // ✅ avoid multiple calls

    // show all if empty
    if (!search) {
      return allProducts;
    }

    // filter safely
    return allProducts.filter(p =>
      p.name?.toLowerCase().includes(search)
    );
  });

  trackById(index: number, item: any) {
  return item.id;
}

}