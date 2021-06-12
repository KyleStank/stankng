import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsModule } from '@shared/buttons';
import { DashboardRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonsModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule {}
