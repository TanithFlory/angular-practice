import { Component, input } from '@angular/core';
import { Todo } from '../../../types';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
}
