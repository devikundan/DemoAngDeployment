// core/product.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  items = signal<any[]>([]);
  products = signal<any[]>([]);
  productslist = signal<any[]>([]);
  cart = signal<any[]>([]);

  loadProducts() {
  const dummyData = [
    {
      id: 1,
      name: 'Ganesha-festival-jercy-tshirt',
      TotalProduct: 40,
      image: 'https://ossublimation.com/wp-content/uploads/2024/07/450656202_1146558316633026_578461332377521063_n.heic_.jpg'
    },
    {
      id: 2,
      name: 'Track-pants',
      TotalProduct: 60,
      image: 'https://ossublimation.com/wp-content/uploads/2025/04/pant-mokup-1536x1086.jpg'
    },
    {
      id: 3,
      name: 'Hoodie-pull-over-cotton',
      TotalProduct: 50,
      image: 'https://ossublimation.com/wp-content/uploads/2022/09/hoodie-pull-over-cotton.jpeg'
    },
    {
      id: 4,
      name: 'TRACK-SUIT-UPPER',
      TotalProduct: 80,
      image: 'https://ossublimation.com/wp-content/uploads/2022/09/TRACK-SUIT-UPPER.jpeg'
    },
    {
      id: 5,
      name: 'cotton-polo',
      TotalProduct: 20,
      image: 'https://ossublimation.com/wp-content/uploads/2022/09/cotton-polo.jpeg'
    }
     
  ];

  
  this.products.set(dummyData);
 
}

loadProductslist() {
  const dummyData = [
    {
      id: 1,
       pid: 1,
      name: 'Ganesha-festival-jercy-tshirt',
      TotalProduct: 40,
      image: 'https://ossublimation.com/wp-content/uploads/2024/07/450656202_1146558316633026_578461332377521063_n.heic_.jpg'
    },
    {
      id: 1,
       pid: 2,
      name: 'Track-pants',
      TotalProduct: 60,
      image: 'https://ossublimation.com/wp-content/uploads/2025/04/pant-mokup-1536x1086.jpg'
    },
    {
      id: 1,
        pid: 3,
      name: 'Hoodie-pull-over-cotton',
      TotalProduct: 50,
      image: 'https://ossublimation.com/wp-content/uploads/2022/09/hoodie-pull-over-cotton.jpeg'
    },
    {
      id: 1,
      pid: 4,
      name: 'TRACK-SUIT-UPPER',
      TotalProduct: 80,
      image: 'https://ossublimation.com/wp-content/uploads/2022/09/TRACK-SUIT-UPPER.jpeg'
    },
    {
      id: 2,
        pid: 1,
      name: 'cotton-polo',
      TotalProduct: 20,
      image: 'https://ossublimation.com/wp-content/uploads/2022/09/cotton-polo.jpeg'
    }
     
  ];

  
  this.productslist.set(dummyData);
 
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