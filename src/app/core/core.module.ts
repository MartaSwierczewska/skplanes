import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ]
})
export class CoreModule { }
