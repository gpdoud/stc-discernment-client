import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HelpComponent } from './core/help/help.component';
import { HomeComponent } from './core/home/home.component';

import { ParishionerChangeComponent } from './feat/parishioner/parishioner-change/parishioner-change.component';
import { ParishionerCreateComponent } from './feat/parishioner/parishioner-create/parishioner-create.component';
import { ParishionerDetailComponent } from './feat/parishioner/parishioner-detail/parishioner-detail.component';
import { ParishionerListComponent } from './feat/parishioner/parishioner-list/parishioner-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "parishioners/list", component: ParishionerListComponent },
  { path: "parishioners/create", component: ParishionerCreateComponent },
  { path: "parishioners/detail/:id", component: ParishionerDetailComponent },
  { path: "parishioners/change/:id", component: ParishionerChangeComponent },
  
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "help", component: HelpComponent },
  { path: "**", component: E404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
