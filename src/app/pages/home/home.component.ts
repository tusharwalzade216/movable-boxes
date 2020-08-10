import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  @ViewChild(BoxComponent) boxComp: BoxComponent;

  color: ThemePalette = 'accent';

  keyboardControl: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onAddBox = () => this.boxComp.onAddBox();

  toggleControl = (val: boolean) => this.keyboardControl = val;
}