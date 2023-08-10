import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  localItem: string;
  todos: Todo[];
  i: number;
  remcounter: number = 0;
  donecounter: number = 0;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localItem);
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].active === true) {
          this.remcounter++;
        }
        else if (this.todos[i].active === false) {
          this.donecounter++;
        }
      }
    }

  }
  ngOnInit(): void {
    console.log('on in it running');
  }
  
  todoDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (!this.todos[index].active) {
      this.donecounter--;
    }
    if (this.todos[index].active) {
      this.remcounter--;
    }
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }
  todoAdd(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.remcounter++;
  }
  todoCheckbox(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    if (this.todos[index].active) 
    { this.remcounter++; 
      this.donecounter--; }
     else if (!this.todos[index].active)
      { this.remcounter--; 
        this.donecounter++; }
  }
}