import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router, private alertService: AlertServiceService) { }
  public loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
    this.router.navigate(["/home"]);
  }

  async login() {
    if (this.loginForm.invalid) return
    const data = this.loginForm.value;
    const resultado = await this.userService.login(data);

    if (resultado.status == "ok") {
      this.loginForm.reset();
      this.alertService.presentAlert("Logged successfully")
      this.router.navigate(["/home"]);
    }


  }

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  validationMessages = {
    'username': [
      { type: 'maxlength', message: 'Max length of 255 characters' },
    ],
    'password': [
      { type: 'required', message: 'Password required' },
      { type: 'minlength', message: 'Min length of 4 characters' }
    ]
  }
}
