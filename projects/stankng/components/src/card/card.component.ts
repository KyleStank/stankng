import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stank-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
  host: {
    'class': 'stank-card mat-elevation-z2'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StankCard {}
