import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  keyboardControl: BehaviorSubject<boolean>;
  selectedBoxId: BehaviorSubject<number>;

  constructor() {
    this.keyboardControl = new BehaviorSubject(false);
    this.selectedBoxId = new BehaviorSubject(0);
  }

  getKeyboardControl = () => this.keyboardControl;

  setKeyboardControl = (val: boolean) => this.keyboardControl.next(val);

  getSelectedBoxId = () => this.selectedBoxId;

  setSelectedBoxId = (val: number) => this.selectedBoxId.next(val);
}
