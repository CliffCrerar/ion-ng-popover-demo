import { Component, HostListener, OnInit } from '@angular/core';

type State = 'entered' | 'left' | 'over' | 'out' | 'untouched';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {
  mouseEnterLeaveOuter: State;
  mouseEnterLeaveMid: State;
  mouseEnterLeaveInner: State;

  mouseOverOutOuter: State;
  mouseOverOutMid: State;
  mouseOverOutInner: State;

  constructor() { 
    this.stateReducer('mouseEnterLeaveOuter', 'untouched');
    this.stateReducer('mouseEnterLeaveMid', 'untouched');
    this.stateReducer('mouseEnterLeaveInner', 'untouched');
    this.stateReducer('mouseOverOutOuter', 'untouched');
    this.stateReducer('mouseOverOutMid', 'untouched');
    this.stateReducer('mouseOverOutInner', 'untouched');
  }

  ngOnInit() {
  }

  onMouseEnter(event: MouseEvent, elId: string): void{
    console.log('event: ', event);
    console.log('elId: ', elId);
    console.log('type: ', event.type);

  }

  onMouseLeave(event: MouseEvent, elId: string): void{
    console.log('event: ', event);
    console.log('elId: ', elId);
    console.log('type: ', event.type);
  }

  onMouseOver(event: MouseEvent, elId: string): void{
    console.log('event: ', event);
    console.log('elId: ', elId);
    console.log('type: ', event.type);
  }

  onMouseOut(event: MouseEvent, elId: string): void{
    console.log('event: ', event);
    console.log('elId: ', elId);
    console.log('type: ', event.type);
  }

  stateReducer(variableName: string, newState: State){
    this[variableName] = newState;
  }

  setInitState(){

  }
}
