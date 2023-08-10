import { Component,  Input, Output ,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Todo} from 'src/app/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnChanges {
@Input() todo:Todo;
@Input() i:number;
@Output() todoDelete: EventEmitter<Todo> =new EventEmitter();
@Output() todoCheckBox: EventEmitter<Todo> =new EventEmitter();
onClick(todo:Todo){
this.todoDelete.emit(todo);
}
onCheckbox(todo:Todo){
this.todoCheckBox.emit(todo);
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
}
