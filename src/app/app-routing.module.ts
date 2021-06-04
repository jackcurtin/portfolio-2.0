import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgrammingComponent} from "./programming/programming.component";
import {AboutComponent} from "./about/about.component";
import {CreativeProjectsComponent} from "./creative-projects/creative-projects.component";

const routes: Routes = [
  {
    path: 'programming',
    component: ProgrammingComponent
  },
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'creative-pursuits',
    component: CreativeProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
