import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  users: IUser[];
  email = new FormControl('', [Validators.email, Validators.required]);
  phone = new FormControl('', [Validators.required, Validators.minLength(8)]);

  myForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: this.email,
    phone: this.phone,
    street: new FormControl(''),
    suit: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl('')
  })
  constructor(private router: Router) { }

  ngOnInit(): void {}

  save(): void {
    this.router.navigate(['todos'])
  }

}


