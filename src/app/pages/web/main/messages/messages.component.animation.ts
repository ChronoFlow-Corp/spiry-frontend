import {animate, style, transition, trigger} from '@angular/animations';

export const MESSAGE_FADE_IN_ANIMATION = trigger('messageFadeIn', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(50vh)',
    }),
    animate(
      '300ms ease-out',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      }),
    ),
  ]),
]);

export const MESSAGE_OPACITY_ANIMATION = trigger('messageOpacity', [
  transition(':enter', [
    style({opacity: 0}),
    animate('200ms ease-out', style({opacity: 1})),
  ]),
]);
