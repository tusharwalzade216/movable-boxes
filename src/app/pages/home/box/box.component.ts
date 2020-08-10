import { Component, OnInit, Input } from '@angular/core';
import { BoxesService } from '../../../services/boxes.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.styl']
})
export class BoxComponent implements OnInit {

  @Input('isActive') isActive: boolean;
  @Input('z_index') z_index: number;

  keyboardControl: boolean;

  constructor(private _boxesService: BoxesService) { }

  ngOnInit(): void {
    this._boxesService.getKeyboardControl().subscribe(val => this.keyboardControl = val);
  }
}
