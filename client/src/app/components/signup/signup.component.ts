import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  constructor(private ApiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')),
      cnfpass: new FormControl(null, this.passValidator)
    });

    this.myForm.controls.password.valueChanges
      .subscribe(
        x => this.myForm.controls.cnfpass.updateValueAndValidity()
      );
  }

  isInvalid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  register() {

    if (this.myForm.valid) {
      this.ApiService.signUp(this.myForm.value)
        .subscribe(
          data => this.movetologin()
        );
    }
  }

  movetologin() {
    this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
  }
}
