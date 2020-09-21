import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
