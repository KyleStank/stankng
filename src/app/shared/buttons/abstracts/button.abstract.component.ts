import { Directive, EventEmitter, Input, Output } from '@angular/core';

import { IClick, IDisabled } from '@shared/interfaces';

@Directive()
export class AbstractButtonComponent implements IClick<MouseEvent>, IDisabled {
  @Input()
  disabled = false;

  @Output()
  onClick = new EventEmitter<MouseEvent>();
}
