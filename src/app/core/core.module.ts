import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ]
})
export class CoreModule { }
