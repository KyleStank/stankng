import { EventEmitter } from '@angular/core';

export interface IClick<T = void> {
  onClick: EventEmitter<T>;
}
