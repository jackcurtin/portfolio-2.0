import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EmailFormComponent} from "../email-form/email-form.component";

@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.css']
})
export class ContactFooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EmailFormComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
