import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ButtonRaisedComponent } from './components';

const exportedDeclarations: any[] = [
  ButtonRaisedComponent
];

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class ButtonsModule {}
