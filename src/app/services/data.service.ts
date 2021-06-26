
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  store = new BehaviorSubject<ITodo[]>([])
  constructor() { }

}
