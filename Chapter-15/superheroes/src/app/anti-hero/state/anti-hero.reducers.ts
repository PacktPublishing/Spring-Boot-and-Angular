import { createReducer, on } from '@ngrx/store';
import { AntiHero } from '../models/anti-hero.interface';
import { addAntiHeroState, modifyAntiHeroState, removeAllAntiHeroState, removeAntiHeroState, setAntiHeroList } from './anti-hero.actions';

export interface AntiHeroState {
    antiHeroes: ReadonlyArray<AntiHero>;
}

export const initialState: AntiHeroState = {
    antiHeroes: []
}

export const antiHeroReducer = createReducer(
  initialState,
  on(setAntiHeroList, (state, { antiHeroes }) => { return {...state, antiHeroes}}),
  on(removeAntiHeroState, (state, { antiHeroId }) => {
    return {...state, antiHeroes: state.antiHeroes.filter(data => data.id != antiHeroId)}
  }),
  on(addAntiHeroState, (state, {antiHero}) => {
    return {...state, antiHeroes: [...state.antiHeroes, antiHero]}
  }),
  on(modifyAntiHeroState, (state, {antiHero}) => {
    return {...state, antiHeroes: state.antiHeroes.map(data => data.id === antiHero.id ? antiHero : data)}
  }),
  on(removeAllAntiHeroState, (state) => {
    return {...state, antiHeroes: []}
  }),
  );
