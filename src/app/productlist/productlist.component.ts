import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule],   // ✅ only CommonModule, no self-import
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
  productId!: number;
  filteredProducts: any[] = [];

  private service = inject(ProductService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Load products into the signal
    this.service.loadProductslist();

    // Subscribe to route changes
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));

      // ✅ unwrap the signal with () before using array methods
      this.filteredProducts = this.service.productslist().filter(
        p => p.id === this.productId
      );

     
    });
  }

  goToDetails(pid: number) {
    // ✅ navigate to product details page
     console.log(pid); // Debug
    this.router.navigate(['/productsdetails', pid]);
  }
  
}
