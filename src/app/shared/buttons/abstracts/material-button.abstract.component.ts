import { Directive, Input } from '@angular/core';
import { IColor, IDisableRipple } from '@shared/interfaces';

import { AbstractButtonComponent } from './button.abstract.component';

@Directive()
export class AbstractMaterialButtonComponent extends AbstractButtonComponent implements IColor, IDisableRipple {
  @Input()
  color: string = 'primary';

  @Input()
  disableRipple = false;
}
