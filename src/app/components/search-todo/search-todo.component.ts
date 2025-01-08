import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-todo',
  imports: [FormsModule],
  templateUrl: './search-todo.component.html',
  styleUrl: './search-todo.component.css',
})
export class SearchTodoComponent {
  searchInput = signal<string>('');
  searchChanged = output<string>();

  onSearchChange(): void {
    this.searchChanged.emit(this.searchInput());
  }
}
