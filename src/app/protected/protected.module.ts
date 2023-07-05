import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, NotFoundComponent],
  imports: [CommonModule, ProtectedRoutingModule],
})
export class ProtectedModule {}
