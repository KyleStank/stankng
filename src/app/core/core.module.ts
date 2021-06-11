import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectivesModule } from './directives';
import { PipesModule } from './pipes';

const exportedModules: any[] = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,

  DirectivesModule,
  PipesModule
];

@NgModule({
  imports: exportedModules,
  exports: exportedModules
})
export class CoreModule {}
