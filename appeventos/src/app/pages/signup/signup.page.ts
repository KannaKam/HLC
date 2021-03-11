import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router:Router,private alertService:AlertServiceService) { }

  public signUpForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  async signUp() {
    if (this.signUpForm.invalid) return
    const data = this.signUpForm.value;

    
    await this.usersService.signup(data);
    this.alertService.presentAlert("Registrado con éxito");
    this.router.navigate(["/login"]);
  }

  get username() {
    return this.signUpForm.get('username')
  }
  get email() {
    return this.signUpForm.get('email')
  }
  get age() {
    return this.signUpForm.get('age')
  }
  get password() {
    return this.signUpForm.get('password')
  }

  createForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required,  Validators.maxLength(2)]],
      username: ['', [Validators.required]]
    })
  }

  validationMessages = {
    'email': [
      { type: 'required', message: 'Mail required' },
      { type: 'maxlength', message: 'Max length of 255 characters' },
      { type: 'email', message: 'Valid email format' },
    ],
    'password': [
      { type: 'required', message: 'Password required' },
      { type: 'minlength', message: 'Min length of 4 characters' }
    ],
    'username': [
      { type: 'required', message: 'Username required' },
    ],
    'age': [
      { type: 'required', message: 'Age required'},
      { type: 'maxlength', message: 'Max length of 2 characters' },
    ]
  }

}
