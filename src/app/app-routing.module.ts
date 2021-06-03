import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgrammingComponent} from "./programming/programming.component";

const routes: Routes = [
  {
    path: 'programming',
    component: ProgrammingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
