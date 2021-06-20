import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { StankCard } from './card.component';

const moduleExports: any[] = [
  StankCard
];

@NgModule({
  imports: [CommonModule, MatCardModule],
  exports: moduleExports,
  declarations: moduleExports
})
export class StankCardModule {}
