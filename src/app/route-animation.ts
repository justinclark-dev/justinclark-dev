import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  state
} from '@angular/animations';

export const slideInMenu =
trigger('openClose', [
  state('open', style({
    opacity: 1,
    transform: 'translateX(0%)'
  })),
  state('closed', style({
    opacity: 0.5,
    transform: 'translateX(-100%)'
  })),
  transition('open => closed', [
    animate('0.5s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ])
]);

export const slideInAnimation =
  trigger('routeAnimations', [

      // TODO: refactor the below to use the 'openClose' trigger within 'slideInMenu', calling it from this location
      state('open', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('closed', style({
        opacity: 0.5,
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),

      transition('* <=> *', [
          query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
          group([
                query(':enter',[
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out',
                    style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
          ])
      ])
]);
