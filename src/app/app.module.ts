import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';


  let routes: Routes = [
    {path: '', component: HomeComponent,
      children: [
        {path: '', redirectTo: 'userRegister', pathMatch: 'full'},
        {path: 'userRegister', component: UserRegisterComponent},
        {path: 'todos', component: TodosComponent, children: [
          {path: 'addTodo', component: AddTodoComponent}
        ]}

    ]}
  ]

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    HomeComponent,
    HeaderComponent,
    TodosComponent,
    TodoComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
