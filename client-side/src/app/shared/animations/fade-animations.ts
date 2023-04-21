import {animate, animation, state, style, transition, trigger} from "@angular/animations";

export const fadeInAnimation = trigger('fadeIn', [
  state('increaseOpacity', style({
    opacity: '1',
  })),
  state('decreaseOpacity', style({
    opacity: '0',
  })),
  transition('* => increaseOpacity', [
    animate('0.5s 0.4s ease-in')
  ]),
  transition('increaseOpacity => *', [
    animate('0.3s ease-out')
  ])
]);
