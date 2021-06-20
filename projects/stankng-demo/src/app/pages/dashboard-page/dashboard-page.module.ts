import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StankButtonModule, StankCardModule, StankIconModule } from '@stankng/components';

import { DashboardRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    StankButtonModule,
    StankIconModule,
    StankCardModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule {}
