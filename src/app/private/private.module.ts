import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [NotFoundComponent, UserProfileComponent],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
