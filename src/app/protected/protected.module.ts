import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule, ProtectedRoutingModule],
})
export class ProtectedModule {}
