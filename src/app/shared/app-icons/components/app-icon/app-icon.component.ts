import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { IColor } from '@shared/interfaces';

@Component({
  selector: 'app-icon',
  template: `
    <mat-icon
      [color]="color"
      [inline]="inline"
      [svgIcon]="svgIcon ?? ''"
      [fontSet]="fontSet ?? ''"
      [fontIcon]="fontIcon ?? ''"
    >
      <ng-content></ng-content>
    </mat-icon>
  `,
  styleUrls: ['app-icon.component.scss'],
  host: {
    'class': 'app-icon'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppIcon implements IColor {
  @Input()
  color: string = 'primary';

  @Input()
  inline: boolean = false;

  @Input()
  svgIcon: string | undefined;

  @Input()
  fontSet: string | undefined;

  @Input()
  fontIcon: string | undefined;
}
