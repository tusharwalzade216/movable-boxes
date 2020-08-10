import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConstants } from './app.constants';
import { BoxesModule } from "./pages/boxes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoxesModule
  ],
  providers: [AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
