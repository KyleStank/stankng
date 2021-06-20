import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {
  StankButton,
  StankButtonFlat,
  StankButtonIcon,
  StankButtonRaised
} from './button.component';
import { StankIconModule } from '../icon/icon.module';

const moduleExports: any[] = [
  StankButton,
  StankButtonFlat,
  StankButtonIcon,
  StankButtonRaised
];

@NgModule({
  imports: [CommonModule, MatButtonModule, StankIconModule],
  exports: moduleExports,
  declarations: moduleExports
})
export class StankButtonModule {}
