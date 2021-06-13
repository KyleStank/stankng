import { Directive, Input } from '@angular/core';
import { IColor, IDisableRipple } from '@shared/interfaces';

import { AbstractAppButton } from './app-button.abstract.component';

@Directive()
export class AbstractAppMaterialButton extends AbstractAppButton implements IColor, IDisableRipple {
  @Input()
  color: string = 'primary';

  @Input()
  disableRipple = false;
}
