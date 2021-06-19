import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['app-card.component.scss'],
  host: {
    'class': 'app-card mat-elevation-z2'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppCard {}
