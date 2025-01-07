import { Component, inject, signal } from '@angular/core';
import { AddToDoComponent } from '../add-to-do/add-to-do.component';
import { TodoService } from '../../services/todo.service';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../../types';

@Component({
  selector: 'app-todos',
  imports: [AddToDoComponent, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  toDoList = signal<Todo[]>([]);
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => this.toDoList.set(todos));
  }

  addTodo(newTodo: string) {
    // this.toDoList.update((value) => [...value, newTodo]);
  }
}
