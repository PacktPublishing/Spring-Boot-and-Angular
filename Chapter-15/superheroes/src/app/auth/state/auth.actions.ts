import { Action, createAction, props } from '@ngrx/store';
import { User } from '../models/user.interface';

export enum AuthActions {
 LOGIN = '[AUTH] Login',
 SET_TOKEN = '[AUTH] Set Token',
 CREATE_USER = '[AUTH] Create User',
 LOGIN_ERROR = '[AUTH] LOGIN_ERROR',
}


export const setToken = createAction(
    AuthActions.SET_TOKEN,
    props<{ token: string }>(),
);
    

export const setError = createAction(
    AuthActions.LOGIN_ERROR,
    props<{ error: any }>(),
);