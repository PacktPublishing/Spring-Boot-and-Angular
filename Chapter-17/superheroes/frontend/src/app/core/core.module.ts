import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticateService } from './services/authenticate.service';


@NgModule({
  declarations: [],
  providers: [AuthenticateService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("Core module should only be imported to the Root Module")
    }
  }
}


