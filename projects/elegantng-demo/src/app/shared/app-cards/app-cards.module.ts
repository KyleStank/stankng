import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppButtonsModule } from '../app-buttons';
import { AppCard } from './components';

const exportedDeclarations: any[] = [
  AppCard
];

@NgModule({
  imports: [CommonModule, MatCardModule, AppButtonsModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class AppCardsModule {}
