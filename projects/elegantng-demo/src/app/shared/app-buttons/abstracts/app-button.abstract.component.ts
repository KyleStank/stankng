import { Directive, EventEmitter, Input, Output } from '@angular/core';

import { IClick, IDisabled } from '../../interfaces';

@Directive()
export class AbstractAppButton implements IClick<MouseEvent>, IDisabled {
  @Input()
  disabled = false;

  @Output()
  onClick = new EventEmitter<MouseEvent>();
}
