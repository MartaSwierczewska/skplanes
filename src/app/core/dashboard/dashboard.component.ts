import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = this.authService.user;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/login']));
  }
}
