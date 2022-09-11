import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { CoreModule } from '../core/core.module';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { authReducer } from './state/auth.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['token']})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forFeature('authState', authReducer, {metaReducers}),
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthModule { }
