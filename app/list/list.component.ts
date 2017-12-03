import { Component, OnInit } from '@angular/core';
import { Clarity } from '../clarity';
import { ClaritydesignService } from '../claritydesign.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  iClarity: Clarity[];
  data: Array<any> = [];
  constructor(private _clarity: ClaritydesignService,private router: Router) {
  }
  
  ngOnInit() : void {
     this._clarity.getclarity().subscribe(claritydata => this.data = claritydata);
  }
  viewTodo(id){
   this.router.navigate(["/todo", id]);
  }

}
