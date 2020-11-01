import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor( private authService: AuthService , private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.success('login success');
    }, error => {
      this.alertifyService.error('login failed');
    }, () => {
      this.router.navigate(['/main']);
    });
  }

}
