import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

searchText = signal('');

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(
        debounceTime(300), // Wait for 300ms pause in events
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.search.emit(value);
      });
  }

  onSearch(value: string) {
    this.searchSubject.next(value);
  }

  
}