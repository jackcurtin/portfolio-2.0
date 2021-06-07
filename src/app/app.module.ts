import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { ProgrammingComponent } from './programming/programming.component';
import {MatCardModule} from "@angular/material/card";
import { AboutComponent } from './about/about.component';
import {MatListModule} from "@angular/material/list";
import { CreativeProjectsComponent } from './creative-projects/creative-projects.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { EmailFormComponent } from './email-form/email-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgrammingComponent,
    AboutComponent,
    CreativeProjectsComponent,
    BottombarComponent,
    ContactFooterComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
