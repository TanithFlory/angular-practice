import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Todo } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    return this.http.get<Todo[]>(url);
  }
}
