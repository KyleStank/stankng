import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppIcon } from './components';

const exportedDeclarations: any[] = [
  AppIcon
];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class AppIconsModule {}
