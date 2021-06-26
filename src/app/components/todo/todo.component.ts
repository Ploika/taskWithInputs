import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo
  validation: Boolean = false

  @Output()
  lift = new EventEmitter()

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
  }
  editPost(): void {
    this.todoService.update(this.todo, 201).subscribe(value => {})
  }
  remove(): void {
    let conf = confirm('Are you sure delete this post?')
    if(conf){
      this.todoService.delete(201)
      this.validation = true
      this.lift.emit(this.validation)
    } else {
      return
    }
  }

}
