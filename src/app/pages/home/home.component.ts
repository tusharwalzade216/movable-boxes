import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BoxesService } from '../../services/boxes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  color: ThemePalette = 'accent';
  boxes: Array<Box> = [];
  boxCount: number = 0;
  keyboardControl: boolean = false;

  constructor(private _boxesService: BoxesService) { }

  ngOnInit(): void { }

  onAddBox() {
    const boxCount = this.getBoxCount();
    const box = new Box();
    box.id = boxCount + 1;
    box.z_index = boxCount * 10;
    box.selected = false;
    this.boxes.push(box);
    this.increaseBoxCount();
    this.setAllBoxesInactive();
  }

  getBoxById = (id: number) => this.boxes.findIndex(obj => obj.id === id);

  onDeleteBox = (id: number) => {
    const index = this.getBoxById(id);
    console.log(this.boxes);
    this.boxes.splice(index);
    console.log(this.boxes);
  }

  getBoxCount = () => this.boxCount;

  increaseBoxCount = () => this.boxCount++;

  decreaseBoxCount = () => this.boxCount++;

  setAllBoxesInactive = () => this.boxes.forEach(obj => obj.selected = false);

  toggleActiveBox = (id: number) => {
    const index = this.getBoxById(id);
    this.boxes[index].selected = !this.boxes[index].selected;
    this._boxesService.setSelectedBoxId(this.boxes[index].selected ? this.boxes[index].id : 0);
  }

  toggleControl(val: boolean) {
    this._boxesService.setKeyboardControl(val);
  }
}

class Box {
  id: number;
  z_index: number;
  selected: boolean;
}