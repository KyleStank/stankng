import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppButtonsModule } from '@shared/app-buttons';
import { AppIconsModule } from '@shared/app-icons';
import { DashboardRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppButtonsModule,
    AppIconsModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule {}
