import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputSideNav: MatSidenav;

  constructor(public apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
  }

  goToRegister() {
    this.router.navigate(['../signup'], { relativeTo: this.activatedRoute });
  }

  goToHome() {
    this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
  }

  logout() {
    this.apiService.logout();
    this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
  }

}
