import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AntiHero } from '../models/anti-hero.interface';
import { AntiHeroState } from './anti-hero.reducers';


export const selectAntiHeroState = createFeatureSelector<AntiHeroState>('antiHeroState')

export const selectAntiHeroes = () => createSelector(
    selectAntiHeroState,
    (state: AntiHeroState) => state.antiHeroes
)
export const selectAntiHero = (id: string) => createSelector(
    selectAntiHeroState,
    (state: AntiHeroState) => state.antiHeroes.find(d => d.id === id) 
)