import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AuthState } from './auth.reducers';


export const selectAuthState = createFeatureSelector<AuthState>('authState')

export const selectError = () => createSelector(
    selectAuthState,
    (state: AuthState) => state.error
)