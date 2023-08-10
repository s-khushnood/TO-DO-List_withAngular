import { Component, EventEmitter, Output,OnChanges } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnChanges{
title:string
desc:string
display:boolean=false;
btndisplay:boolean=true;
@Output() todoAdd: EventEmitter<Todo>= new EventEmitter();
constructor(){

}
ngOnChanges(): void {
  console.log('changing running')
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
