import { Component, OnInit } from '@angular/core';
import { Clarity } from './clarity';
import { ClaritydesignService } from './claritydesign.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
   selector: 'app-root',
   template: '<ul><li>{{data | json}}</li></ul>',
   providers: [ClaritydesignService]
})

export   class   AppComponent  {
   iClarity: Clarity[];
   data: Object = {};
   constructor(private _clarity: ClaritydesignService) {
   }
   
   ngOnInit() : void {
      this._clarity.getclarity().subscribe(claritydata => this.data = claritydata);
   }
} 