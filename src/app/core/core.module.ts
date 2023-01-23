import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,    
    HomeComponent,    
    AboutComponent,    
    HelpComponent,    
    E404Component
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
