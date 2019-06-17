import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value)
        .subscribe(
          data => {
            localStorage.setItem('token', data.toString());
            this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
          },
          //TODO make this prettier
          error => { alert(error.error.error) }
        );
    }
  }

  
}
