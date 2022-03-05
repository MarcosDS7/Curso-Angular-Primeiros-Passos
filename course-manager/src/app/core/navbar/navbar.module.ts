import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule],
  exports: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
