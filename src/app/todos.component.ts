import { Component, OnInit } from '@angular/core';
import { Todos } from './todos';
import { TodoService } from './todos.service'
import { Location } from '@angular/common';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  //styleUrls: ['./todos.component.css']
})
export class ToDosComponent implements OnInit {
  todosList: Todos[];
  private sub: any;
  id:number = 0;

  constructor(
      private todoService: TodoService,
      private location: Location,
      private router: Router,
      private route: ActivatedRoute,

    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      (this.id = params["id"]),
        this.getTodos();
    });
    
  }

  getTodos(): void {
    this.todoService.getTodos(this.id)
    .subscribe(todosList => this.todosList = todosList);
  }
  goBack(): void {
    this.router.navigate(["/home"]);
  }
}