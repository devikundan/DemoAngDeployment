// core/product.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  items = signal<any[]>([]);
  products = signal<any[]>([]);
  cart = signal<any[]>([]);

  loadProducts() {
  const dummyData = [
    {
      id: 1,
      name: 'Laptop',
      price: 75000,
      image: 'https://m.media-amazon.com/images/I/810mOX5-LyL._AC_.jpg'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 25000,
      image: 'https://cdn.beebom.com/mobile/vivo-y400-pro-front-back.png'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 3000,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572447_sd.jpg'
    },
    {
      id: 4,
      name: 'Keyboard',
      price: 1500,
      image: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/148512-laptops-news-buyer-s-guide-best-keyboards-image18-1s9lsdfnrj.jpg'
    },
    {
      id: 5,
      name: 'Mouse',
      price: 800,
      image: 'https://m.media-amazon.com/images/I/61YQeAUIboL._AC_.jpg'
    }
    
  ];

  
  this.products.set(dummyData);
 
}

  addToCart(product: any) {
  const existing = this.cart().find(p => p.name === product.name);
  if (existing) {
    existing.qty++;
  } else {
    this.cart.update(items => [...items, { ...product, qty: 1 }]);
  }
}

 getItems() {
    return this.items;
  }

  clearCart() {
    this.items.set([]);
    return this.items;
  }
  
}