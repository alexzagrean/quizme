import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]

  });
  }
  register(){
    console.log(this.registerForm.value);
    this.loginService.register(this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.name,
      this.registerForm.value.phoneNumber)
    .subscribe((el)=>{
      console.log(el);
      this.router.navigateByUrl('/login');      
    });
  }
}
