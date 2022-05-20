import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule { }
