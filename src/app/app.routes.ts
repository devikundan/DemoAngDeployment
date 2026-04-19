import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
    { path: '', component: DemoComponent,pathMatch: 'full' },
   { path: 'demo', component: DemoComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component')
        .then(m => m.ProductsComponent)
  },
  {
    path: 'productslist/:id',
    loadComponent: () =>
      import('./productlist/productlist.component')
        .then(m => m.ProductListComponent)
  },
    {
    path: 'productsdetails/:pid',
    loadComponent: () =>
      import('./product-details/product-details.component')
        .then(m => m.ProductDetailsComponent)
  },
  {
    path: 'cart-item',
    loadComponent: () =>
      import('./cart-item/cart-item.component')
        .then(m => m.CartItemComponent)
  },
   { path: '', redirectTo: 'demo', pathMatch: 'full' },
];
