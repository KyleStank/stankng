import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { IconComponent } from './components';

const exportedDeclarations: any[] = [
  IconComponent
];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class IconsModule {}
