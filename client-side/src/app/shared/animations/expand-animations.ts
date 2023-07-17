import {animate, state, style, transition, trigger} from "@angular/animations";

export const expandInAnimation = trigger('expandIn', [
  state('increaseHeight', style({
    height: '181.07px',
  })),
  state('decreaseHeight', style({
    height: '77.06px',
  })),
  transition('* => increaseHeight', [
    animate('0.3s ease-in')
  ]),
  transition('increaseHeight => *', [
    animate('0.3s ease-out')
  ]),
]);
