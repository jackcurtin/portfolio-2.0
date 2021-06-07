import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailAddress: string | undefined;
  message: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
