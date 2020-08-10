import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from './home/home.component';
import { BoxComponent } from './home/box/box.component';
import { MovementDirective } from '../directives/movement.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    BoxComponent,
    MovementDirective
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatSlideToggleModule
  ]
})
export class BoxesModule { }
