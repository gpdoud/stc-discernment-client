import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { E404Component } from './e404/e404.component';


@NgModule({
  declarations: [
    MenuComponent,    HomeComponent,    AboutComponent,    HelpComponent,    E404Component
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
