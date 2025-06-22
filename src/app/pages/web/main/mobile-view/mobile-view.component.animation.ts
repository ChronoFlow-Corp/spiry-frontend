import {animate, state, style, transition} from '@angular/animations';

import {trigger} from '@angular/animations';

export const TEXT_FADE_OUT_ANIMATION = trigger('textFadeOut', [
  state('visible', style({opacity: 1, transform: 'translateY(0)'})),
  state(
    'hidden',
    style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-100vh)',
    }),
  ),
  transition('visible => hidden', animate('200ms ease-out')),
]);
