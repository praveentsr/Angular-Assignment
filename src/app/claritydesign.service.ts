import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Clarity } from './clarity';

@Injectable()
export class ClaritydesignService {
   private _producturl='https://jsonplaceholder.typicode.com/users';
   constructor(private _http: Http){}
   
   getclarity(): Observable<Clarity[]> {    
      return this._http.get(this._producturl)
      .map((response: Response) => <Clarity[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}