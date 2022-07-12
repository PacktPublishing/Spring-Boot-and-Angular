import { createAction, props } from '@ngrx/store';
import { AntiHero } from '../models/anti-hero.interface';




export enum AntiHeroActions {
  GET_ANTI_HERO_LIST = '[Anti-Hero] Get Anti-Hero list',
  SET_ANTI_HERO_LIST = '[Anti-Hero] Set Anti-Hero list',

}

export const getAntiHeroList = createAction(
  AntiHeroActions.GET_ANTI_HERO_LIST,
);

export const setAntiHeroList = createAction(
AntiHeroActions.SET_ANTI_HERO_LIST,
props<{ antiHeroes: ReadonlyArray<AntiHero> }>(),
);

 
