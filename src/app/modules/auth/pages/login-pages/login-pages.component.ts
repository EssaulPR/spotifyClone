import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css'
})
export class LoginPagesComponent {
  formlogin:FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.formlogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.maxLength(12),
          Validators.minLength(6),
          Validators.required
        ])
      }
    )
  }
  sendLogin(): void {
    const body = this.formlogin.value
    console.log(body);
  }
}
