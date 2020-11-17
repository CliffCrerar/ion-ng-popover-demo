import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'popover',
  template: `<ion-card><ion-card-title>{{message}}</ion-card-title></ion-card>`
})
export class PopoverComponent {
  @Input() message;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  message;
  constructor(private _popOverController: PopoverController) {
    console.log('this._popOverController: ', this._popOverController);
  }

  get popoverText() {
    return {
      earth: {
        message: 'message of earth'
      },
      palette: {
        message: 'message of earth'
      }
    };
  }

  createPopover(ev, message) {
    return this._popOverController.create({
      component: PopoverComponent,
      event: ev,
      componentProps: {message},
      showBackdrop: false
    });
  }



  hover(event) {
    console.log('event: ', event);
    console.log('event: ', event.type);
    this.message = this.popoverText[event.target.id].message;
    console.log('this.message: ', this.message);
    this.createPopover(event, this.message).then(popover => popover.present());
  }
}
