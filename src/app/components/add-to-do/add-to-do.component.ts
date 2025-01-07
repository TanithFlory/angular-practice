import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  imports: [FormsModule],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css',
})
export class AddToDoComponent {
  constructor(private toDoService: TodoService) {}
}
