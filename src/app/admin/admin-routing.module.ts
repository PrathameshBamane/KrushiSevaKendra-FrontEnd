import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { CropsComponent } from './crops/crops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmersComponent } from './farmers/farmers.component';
import { LandingComponent } from './landing.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { TownsComponent } from './towns/towns.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "admins", component: AdminsComponent },
  { path: "towns", component: TownsComponent },
  { path: "landing", component: LandingComponent },
  { path: "crops", component: CropsComponent },
  { path: "farmers", component: FarmersComponent },
  { path: "recommendations/:farmerid", component: RecommendationsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }