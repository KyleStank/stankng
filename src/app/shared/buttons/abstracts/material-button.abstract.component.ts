import { Directive, Input } from '@angular/core';

import { AbstractButtonComponent } from './button.abstract.component';

@Directive()
export class AbstractMaterialButtonComponent extends AbstractButtonComponent {
  @Input()
  color: string = 'primary';

  @Input()
  disableRipple = false;
}
