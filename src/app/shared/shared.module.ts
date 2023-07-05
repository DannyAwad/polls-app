import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { NavComponent } from '../components/nav/nav.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent, NotFoundComponent],
})
export class SharedModule {}
