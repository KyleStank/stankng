import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AbstractAppMaterialButton } from '../../abstracts';

@Component({
  selector: 'app-button-icon',
  template: `
    <button
      mat-icon-button
      [color]="color"
      [disabled]="disabled"
      [disableRipple]="disableRipple"
      (click)="onClick.emit($event)"
    >
      <app-icon>
        <ng-content></ng-content>
      </app-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppButtonIcon extends AbstractAppMaterialButton {}
