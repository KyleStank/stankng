import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppIconsModule } from '@shared/app-icons';
import {
  AppButton,
  AppButtonFlat,
  AppButtonIcon,
  AppButtonRaised
} from './components';

const exportedDeclarations: any[] = [
  AppButton,
  AppButtonFlat,
  AppButtonIcon,
  AppButtonRaised
];

@NgModule({
  imports: [CommonModule, MatButtonModule, AppIconsModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class AppButtonsModule {}
