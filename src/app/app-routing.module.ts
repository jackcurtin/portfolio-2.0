import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgrammingComponent} from "./programming/programming.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: 'programming',
    component: ProgrammingComponent
  },
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
