import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollsRoutingModule } from './polls-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreatePollComponent } from './pages/create-poll/create-poll.component';
import { UpdatePollComponent } from './pages/update-poll/update-poll.component';
import { ShowPollComponent } from './pages/show-poll/show-poll.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreatePollComponent,
    UpdatePollComponent,
    ShowPollComponent
  ],
  imports: [
    CommonModule,
    PollsRoutingModule
  ]
})
export class PollsModule { }
