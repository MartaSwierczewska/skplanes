import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: MatSnackBar
  ) {
  }

  login() {
    this.authService.login(this.credentials)
      .then(user => this.router.navigate(['/dashboard']))
      .catch(error => this.toast.open(error.message, '', {panelClass: 'toast-error'}));
  }

  register() {
    this.authService.register(this.credentials)
      .then(user => this.toast.open('Account created. Please log in', '', {panelClass: 'toast-success'}))
      .catch(error => this.toast.open(error.message, '', {panelClass: 'toast-error'}));
  }
}
