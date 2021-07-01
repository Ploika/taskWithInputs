
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  store = new BehaviorSubject<IProduct[]>([])
  constructor() { }

}
