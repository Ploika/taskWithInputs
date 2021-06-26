import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from 'src/app/models/todo';
import { DataService } from 'src/app/services/data.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];
  catch: any
  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private router: Router, private dataTransfer: DataService) {
    this.activatedRoute.params.subscribe(params => {

      this.todoService.get(params.id).subscribe(value => {});

      this.dataTransfer.store.subscribe(value => {
        this.todos = value;
      })
    })
  }


  ngOnInit(): void {

  }
  addTodo(): void{
    this.activatedRoute.params.subscribe(params => {
      this.router.navigate(['addTodo'], {relativeTo: this.activatedRoute})
    })
  }
  catchTodo(value: any): void {
    this.catch = value;
    if(this.catch){
      this.todos.shift()
    } else {
      return
    }
  }
}
