import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../models/product";

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform{
  transform(todos: IProduct[], search: string = ''): IProduct[] {
    if(!search.trim()){
      return todos
    }
    return todos.filter(todo => {
      return todo.product.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    })
  }
}
