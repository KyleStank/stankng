import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stank-icon',
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
  styleUrls: ['./icon.component.scss'],
  host: {
    'class': 'stank-icon'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StankIcon {
  @Input()
  color: string | undefined;

  @Input()
  inline: boolean = false;

  @Input()
  svgIcon: string | undefined;

  @Input()
  fontSet: string | undefined;

  @Input()
  fontIcon: string | undefined;
}
