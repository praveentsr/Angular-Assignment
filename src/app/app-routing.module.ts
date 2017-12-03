import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToDosComponent }  from './todos.component';
import { ListComponent } from 'app/list/list.component';

const routes: Routes = [
  { path:'', component: ListComponent},
  { path: 'home', component: ListComponent},
  { path: 'todo/:id', component: ToDosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}