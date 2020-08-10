import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.styl']
})
export class BoxComponent implements OnInit {

  @Input('keyboardControl') keyboardControl: boolean;

  boxes: Array<Box> = [];

  constructor() { }

  ngOnInit(): void { }

  onAddBox() {
    const boxCount = this.getBoxCount();
    const box = new Box();
    box.id = boxCount + 1;
    box.z_index = boxCount * 10;
    box.selected = false;
    this.boxes.push(box);
  }

  onDeleteBox = (id: number) => {
    const index = this.getBoxById(id);
    this.boxes.splice(index);
  }

  getBoxById = (id: number) => this.boxes.findIndex(obj => obj.id === id);

  getBoxCount = () => this.boxes.length;

  toggleActiveBox = (id: number) => {
    const index = this.getBoxById(id);
    this.boxes[index].selected = !this.boxes[index].selected;
  }
}

class Box {
  id: number;
  z_index: number;
  selected: boolean;
}