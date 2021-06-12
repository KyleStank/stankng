import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AbstractMaterialButtonComponent } from '../../abstracts';

@Component({
  selector: 'app-button-raised',
  template: `
    <button
      mat-raised-button
      [color]="color"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonRaisedComponent extends AbstractMaterialButtonComponent {}
