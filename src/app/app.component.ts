// app.component.ts
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="card" (click)="onTitleClick()">Kundan Store</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private router: Router) {}
  onTitleClick() {
     this.router.navigate(['/products']);
  }
}