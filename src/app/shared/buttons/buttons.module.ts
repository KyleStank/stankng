import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {
  ButtonComponent,
  ButtonFlatComponent,
  ButtonRaisedComponent
} from './components';

const exportedDeclarations: any[] = [
  ButtonComponent,
  ButtonFlatComponent,
  ButtonRaisedComponent
];

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class ButtonsModule {}
