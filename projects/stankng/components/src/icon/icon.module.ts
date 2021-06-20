import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { StankIcon } from './icon.component';

const moduleExports: any[] = [
  StankIcon
];

@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: moduleExports,
  declarations: moduleExports
})
export class StankIconModule {}
