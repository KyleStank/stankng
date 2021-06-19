import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const exportedDeclarations: any[] = [];

@NgModule({
  imports: [CommonModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class PipesModule {}
