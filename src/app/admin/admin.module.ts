import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TownsComponent } from './towns/towns.component';
import { FarmersComponent } from './farmers/farmers.component';
import { CropsComponent } from './crops/crops.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminsComponent } from './admins/admins.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    TownsComponent,
    FarmersComponent,
    CropsComponent,
    RecommendationsComponent,
    LandingComponent,
    HeaderComponent,
    SidebarComponent,
    AdminsComponent,



  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AdminModule { }