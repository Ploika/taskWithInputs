import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: IProduct
  @Input()
  i: number
  validation: Boolean = false

  @Output()
  lift = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}
  
  buyProduct(): void {
    this.validation = true;
    this.todo.bought = true;
  }
  remove(): void {
    let conf = confirm('Are you sure delete this product?')
    if(conf){
      this.lift.emit(this.i)
    } else {
      return
    }
  }

}
