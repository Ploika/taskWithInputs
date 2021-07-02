import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo: IProduct;
  product = new FormControl('', [Validators.required])
  count = new FormControl('', [Validators.required])
  myFormGroup = new FormGroup({
    product: this.product,
    count: this.count
  })

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataTransfer: DataService) { }

  ngOnInit(): void {}
  savePost(): void {
    this.activatedRoute.params.subscribe(params => {
      this.todo = {
        product: this.myFormGroup.controls.product.value,
        count: this.myFormGroup.controls.count.value,
        bought: false,
      }
      this.dataTransfer.store.subscribe(value => value.unshift(this.myFormGroup.value))

      this.router.navigate(['todos'])
    })
  }
  canselWindow(): void {
    this.router.navigate(['todos'])
  }

}
