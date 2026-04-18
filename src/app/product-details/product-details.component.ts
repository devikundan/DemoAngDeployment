// product-details.component.ts
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css' 
})
export class ProductDetailsComponent {

  route = inject(ActivatedRoute);
  service = inject(ProductService);
  activeTab = signal<'desc' | 'spec' | 'review'>('desc');
  product = signal<any>(null);
  qty = signal(1);
  desc: string = "This is a detailed description of the product. It provides all the necessary information about the product, including its features, specifications, and benefits. The description is designed to help customers make informed purchasing decisions by highlighting the key aspects of the product and how it can meet their needs.";
// Image slider
images = [
  'https://m.media-amazon.com/images/I/810mOX5-LyL._AC_.jpg',
  'https://cdn.beebom.com/mobile/vivo-y400-pro-front-back.png', 
  'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572447_sd.jpg',
  'https://m.media-amazon.com/images/I/61YQeAUIboL._AC_.jpg',
  'https://cdn.beebom.com/mobile/vivo-y400-pro-front-back.png',
];
 
selectedImage = signal(this.images[0]);
selectImage(img: string) {
  this.selectedImage.set(img);
}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.service.products().find(p => p.id === id);
    this.product.set(found);
    this.desc = found ? found.desc : 'No description available.';
  }

  increase() {
    this.qty.update(q => q + 1);
  }

  decrease() {
    if (this.qty() > 1) {
      this.qty.update(q => q - 1);
    }
  }

  buy(product: any) {
    alert(`Buying ${product.name} (Qty: ${this.qty()})`);
  }
}