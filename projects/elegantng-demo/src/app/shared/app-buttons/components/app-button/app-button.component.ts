import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AbstractAppMaterialButton } from '../../abstracts';

@Component({
  selector: 'app-button',
  template: `
    <button
      mat-button
      [color]="color"
      [disabled]="disabled"
      [disableRipple]="disableRipple"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppButton extends AbstractAppMaterialButton {}
