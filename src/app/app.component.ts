import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ fixed
})
export class AppComponent {
logoPath: string = 'assets/images/krishanlogo.jpeg';
  constructor(private router: Router) {}

  ngOnInit() {
   
  }
  onTitleClick() {
    this.router.navigate(['/products']); // ✅ navigation correct
  }
}