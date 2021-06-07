import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailAddress: string = '';
  message: string = '';

  constructor() { }

  sendEmail(email: string, message: string): void{
    console.log(`email sent from ${email} containing the following message:
    ${message}`)
  }

  ngOnInit(): void {
  }

}
