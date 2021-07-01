import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: IProduct[];
  check: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataTransfer: DataService) {
    this.activatedRoute.params.subscribe(params => {
      this.dataTransfer.store.subscribe(value => {
        this.todos = value;
      })
    })
  }

  ngOnInit(): void {}

  addTodo(): void{
    this.activatedRoute.params.subscribe(params => {
      this.router.navigate(['addTodo'], {relativeTo: this.activatedRoute})
    })
  }
  catchTodo(value: number): void {
    if(value){
      this.todos.splice(value, 1);
    } else if(this.todos.length === 1 || value === 0){
      this.todos.splice(0, 1);
    } else {
      return;
    }
  }
  deleteAllProducts(): void {
    this.todos.splice(0, this.todos.length);
  }
  selectAllProducts(): void {
    this.check = true;
  }
}
