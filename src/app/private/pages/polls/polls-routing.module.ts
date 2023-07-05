import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { ShowPollComponent } from './pages/show-poll/show-poll.component';
import { UpdatePollComponent } from './pages/update-poll/update-poll.component';
import { CreatePollComponent } from './pages/create-poll/create-poll.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: CreatePollComponent },
  { path: 'update', component: UpdatePollComponent },
  { path: 'show', component: ShowPollComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollsRoutingModule {}
