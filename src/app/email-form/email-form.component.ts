import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  form: FormGroup
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(1500)])
  honeypot: FormControl = new FormControl('');
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string ='';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  onSubmit(): void{
    let url = 'https://formspree.io/f/xqkwqrln';
    if(this.form.status == 'VALID' && this.honeypot.value == '') {
      this.form.disable();
      var formData: any = new FormData();
      // @ts-ignore
      formData.append('name', this.form.get('name').value);
      // @ts-ignore
      formData.append('email', this.form.get('email').value);
      // @ts-ignore
      formData.append('message', this.form.get('message').value);
      console.log(formData);
      this.isLoading = true;
      this.submitted = false;
      this.http.post(url, formData).subscribe(
        (response: any) => {
          if (response['ok'] == true) {
            this.responseMessage = 'thanks, talk to you soon!';
          } else {
            this.responseMessage = 'something went wrong... refresh and try again.'
          }
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          this.responseMessage = 'an error occurred... refresh and try again.';
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      )
    }
  }

  ngOnInit(): void {
  }

}
