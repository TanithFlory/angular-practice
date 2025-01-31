import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('./components/todos/todos.component').then(
        (m) => m.TodosComponent
      ),
  },
];
