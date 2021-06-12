import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AbstractMaterialButtonComponent } from '@shared/buttons/abstracts';

@Component({
  selector: 'app-button-flat',
  template: `
    <button
      mat-flat-button
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
export class ButtonFlatComponent extends AbstractMaterialButtonComponent {}
