import { Component, EventEmitter, Output,DoCheck} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements DoCheck{
title:string
desc:string
display:boolean=false;
btndisplay:boolean=true;
@Output() todoAdd: EventEmitter<Todo>= new EventEmitter();
constructor(){

}
ngDoCheck(): void {
  console.log('checked,,addtodo')
}
formdisplay(){
this.display=true;
this.btndisplay=false;
}
onSubmit(form){
  
  const todo={
    title:this.title,
    desc:this.desc,
    active:true
  }
  if(form.status=="INVALID"){
    alert("Add Title and Description for task")
  }
  else{
    this.todoAdd.emit(todo);
    this.display=false;
    this.btndisplay=true;
  }
}
}
