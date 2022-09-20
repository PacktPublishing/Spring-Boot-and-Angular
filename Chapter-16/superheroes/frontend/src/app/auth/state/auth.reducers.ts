import { createReducer, on } from '@ngrx/store';
import { setError, setToken } from './auth.actions';
export interface AuthState {
    userDetails: any;
    token: string;
    error: any
}

export const initialState: AuthState = {
    userDetails: null,
    token: "",
    error: null
}

export const authReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => { return {...state, token}}),
  on(setError, (state, { error }) => { return {...state, error}}),

  );
