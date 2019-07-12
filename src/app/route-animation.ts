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
      transform: 'translateX(0%)'
    })),
    state('closed', style({
      opacity: 0.5,
     /* msTransform: 'translateX(-100%)', /* IE 9 */
     /* webkitTransform: 'translateX(-100%)', /* Safari 3-8 */

      transform: 'translateX(-100%)'
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
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.3s ease',
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.3s ease',
          style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ])
  ]);
