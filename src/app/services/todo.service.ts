import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constans';
import { ITodo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }
  get(id: string): Observable<ITodo[]>{
    return this.httpClient.get<ITodo[]>(`${urls.todosWithUserId}${id}`)
  }
  save(todo: ITodo, id: number): Observable<ITodo>{
    return this.httpClient.post<ITodo>(`${urls.todosWithUserId}${id}`, todo)
  }

  update(todo: ITodo, id: number): Observable<ITodo>{
    return this.httpClient.put<ITodo>(`${urls.todos}/${id}`, todo )
  }

  delete(id: number): Observable<ITodo>{
    return this.httpClient.delete<ITodo>(`${urls.todos}/${id}`)
  }
}
