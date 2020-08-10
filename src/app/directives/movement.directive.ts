import { Directive, ElementRef, Renderer2, HostListener, Input, ViewChild, Inject, forwardRef } from '@angular/core';
import { AppConstants } from '../app.constants';
import { BoxComponent } from '../pages/home/box/box.component';

@Directive({
  selector: '[appMovement]'
})
export class MovementDirective {

  @Input('keyboardControl') keyboardControl: boolean = false;

  constructor(private _appConstants: AppConstants, private el: ElementRef, private renderer: Renderer2,
    @Inject(forwardRef(() => BoxComponent)) public boxComp: BoxComponent) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KEY_CODE.W: this.moveUp(); break;
      case KEY_CODE.A: this.moveLeft(); break;
      case KEY_CODE.S: this.moveDown(); break;
      case KEY_CODE.D: this.moveRight(); break;
      case KEY_CODE.Delete: this.delete(); break;
      default: return;
    }
  }

  moveLeft() {
    const left = this.getElementStyles().left;
    this.renderer.setStyle(this.el.nativeElement, 'left', `${left - this._appConstants.surplusPixel * 2}px`);
  }

  moveRight() {
    const left = this.getElementStyles().left;
    this.renderer.setStyle(this.el.nativeElement, 'left', `${left + this._appConstants.surplusPixel}px`);
  }

  moveUp() {
    const top = this.getElementStyles().top;
    this.renderer.setStyle(this.el.nativeElement, 'top', `${top - this._appConstants.surplusPixel * 2}px`);
  }

  moveDown() {
    const top = this.getElementStyles().top;
    this.renderer.setStyle(this.el.nativeElement, 'top', `${top + this._appConstants.surplusPixel}px`);
  }

  delete = () => this.boxComp.onDeleteBox(parseInt(this.el.nativeElement.id));

  getElementStyles() {
    return {
      left: this.el.nativeElement.offsetLeft,
      top: this.el.nativeElement.offsetTop
    }
  }
}

export enum KEY_CODE {
  W = 87,
  A = 65,
  S = 83,
  D = 68,
  Delete = 46
}
