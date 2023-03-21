import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  title = 'cwh-todo-list';
  constructor() {
    this.todos = [
      {
        sno: '1',
        title: 'dsa',
        desc: 'This is description',
        active: true,
      },
      {
        sno: '2',
        title: 'code',
        desc: 'This is description',
        active: true,
      },
      {
        sno: '3',
        title: 'dsa',
        desc: 'This is description',
        active: true,
      },
    ];
  }
}
