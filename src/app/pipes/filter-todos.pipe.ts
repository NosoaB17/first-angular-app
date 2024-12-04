import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';
@Pipe({
  standalone: true,
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(value: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return value;
    }
    const text = searchTerm.toLowerCase();
    return value.filter((todo: Todo) => {
      return todo.title.toLowerCase().includes(text);
    });
  }
}
