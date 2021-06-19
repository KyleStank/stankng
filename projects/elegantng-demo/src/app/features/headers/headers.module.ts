import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderDefaultComponent } from './components';

const exportedDeclarations: any[] = [
  HeaderDefaultComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: exportedDeclarations,
  exports: exportedDeclarations
})
export class HeadersModule {}
