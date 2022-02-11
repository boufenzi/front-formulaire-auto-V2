import {
  trigger,
  animate,
  transition,
  style,
  state,
} from '@angular/animations';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax

  trigger('fade', [
    state('void', style({ transform: ' translateX(150px)' })),
    transition(':enter, :leave', [animate(200)]),
  ]);
