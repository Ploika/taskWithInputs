import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';


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
  @Input()
  check: boolean;



  @Output()
  lift = new EventEmitter()

  checkIsTrue: boolean;
  checkbox = new FormControl('')

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.checkIsTrue = this.check
    })
  }

  ngOnInit(): void {
  }

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
