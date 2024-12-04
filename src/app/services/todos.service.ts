import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
}
