import { Component, OnInit } from '@angular/core';
import {PROGRAMMING} from "./programming";

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
  programList = PROGRAMMING;

  constructor() { }

  ngOnInit(): void {
  }

}
