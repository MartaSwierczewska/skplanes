import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [DashboardComponent, LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ]
})
export class CoreModule { }
