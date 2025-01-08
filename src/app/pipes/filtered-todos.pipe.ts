import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../types';

@Pipe({
  name: 'filteredTodos',
})
export class FilteredTodosPipe implements PipeTransform {
  transform(value: Todo[], searchInput: string): Todo[] {
    return value.filter((todo) => todo.title.includes(searchInput));
  }
}
