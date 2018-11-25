import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
  });
  }
  login(){
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value.username,this.loginForm.value.password)
    .subscribe((el)=>{
      this.loginService.setToken(el.token);
      this.router.navigateByUrl('/home');
    });
  }
}
