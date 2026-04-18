import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
constructor(private router: Router) {}
  goToProducts() {
  this.router.navigate(['/products']);
}
}


