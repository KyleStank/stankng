import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export class AbstractButtonComponent {
  @Input()
  disabled = false;

  @Output()
  onClick = new EventEmitter<MouseEvent>();
}
