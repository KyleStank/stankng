import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AbstractMaterialButtonComponent } from '@shared/buttons/abstracts';

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
      <app-icon [color]="color">
        <ng-content></ng-content>
      </app-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonIconComponent extends AbstractMaterialButtonComponent {}
