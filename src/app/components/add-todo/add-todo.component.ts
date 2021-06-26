import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from 'src/app/models/todo';
import { DataService } from 'src/app/services/data.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo: ITodo;
  textArea = new FormControl('', [Validators.required])
  myFormGroup = new FormGroup({
    title: this.textArea
  })

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService, private dataTransfer: DataService) { }

  ngOnInit(): void {

  }
  savePost(): void {
    this.activatedRoute.params.subscribe(params => {
      this.todo ={
        userId: 0,
        title: this.myFormGroup.controls.title.value,
        completed: 'false'
      }
      this.todoService.save(this.myFormGroup.value, 11).subscribe(params => {})
      this.dataTransfer.store.subscribe(value => value.unshift(this.todo))

      this.router.navigate(['todos/:id'])
    })
  }
  canselWindow(): void {
    this.router.navigate(['todos/:id'])
  }

}
