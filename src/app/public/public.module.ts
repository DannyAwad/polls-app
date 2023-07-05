import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, NotFoundComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
