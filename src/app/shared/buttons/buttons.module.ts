import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { IconsModule } from '@shared/icons';
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
  imports: [CommonModule, MatButtonModule, IconsModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class ButtonsModule {}
