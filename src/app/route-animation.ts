import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  state
} from '@angular/animations';

const animationState: any = {
  sliderState: [
    state('open', style({
      opacity: 1,
      transform: 'translateX(0%)',
      zIndex: 1000
    })),
    state('closed', style({
      opacity: 0.5,
      transform: 'translateX(-100%)',
      zIndex: 1000
    })),
    transition('open => closed', [
      animate('0.15s')
    ]),
    transition('closed => open', [
      animate('0.15s')
    ])
  ]
};

export const slideInMenu: any =
  trigger('openClose', animationState.sliderState);

export const slideInAnimation: any =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave',
        style({ position: 'fixed', maxWidth: '760px' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('1s ease-in-out',
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)'}),
          animate('0.9s ease-in-out',
          style({ transform: 'translateX(-100%)', opacity: 0 }))
        ], { optional: true }),
      ])
    ])
  ]);
