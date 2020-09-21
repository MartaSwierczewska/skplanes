import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {LoginComponent} from './core/login/login.component';
import {FlightsComponent} from './flights/flights.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'flights', pathMatch: 'full'},
      {path: 'flights', component: FlightsComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
