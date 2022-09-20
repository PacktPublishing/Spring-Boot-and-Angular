import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AntiHero } from '../models/anti-hero.interface';
import { AntiHeroService } from '../services/anti-hero.service';
import { AntiHeroActions } from './anti-hero.actions';

 
@Injectable()
export class AntiHeroEffects {
 
  // get list of anti heroes in the external API
  // set retrieved anti hero list in the state
  getAntiHeroes$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AntiHeroActions.GET_ANTI_HERO_LIST),
        mergeMap(() => this.antiHeroService.getAntiHeroes()
          .pipe(
            map(antiHeroes => ({ type: AntiHeroActions.SET_ANTI_HERO_LIST, antiHeroes })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
  
  // add anti-heroes in the database
  addAntiHero$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(AntiHeroActions.ADD_ANTI_HERO_API),
        mergeMap((data: {type: string, payload: AntiHero}) => this.antiHeroService.addAntiHero(data.payload)
          .pipe(
            map(antiHeroes => ({ type: AntiHeroActions.ADD_ANTI_HERO_STATE, antiHero: data.payload })),
            tap(() =>  this.router.navigate(["anti-heroes"])),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true})

   modifyAntiHero$ = createEffect(() =>{
    return this.actions$.pipe(
        ofType(AntiHeroActions.MODIFY_ANTI_HERO_API),
        mergeMap((data: {type: string, payload: AntiHero}) => this.antiHeroService.updateAntiHero(data.payload.id, data.payload)
          .pipe(
            map(antiHeroes => ({ type: AntiHeroActions.MODIFY_ANTI_HERO_STATE, antiHero: data.payload })),
            tap(() =>  this.router.navigate(["anti-heroes"])),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true})

  // remove anti-heroes in the database
  removeAntiHero$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AntiHeroActions.REMOVE_ANTI_HERO_API),
        mergeMap((data: { payload: string}) => this.antiHeroService.deleteAntiHero(data.payload)
          .pipe(
            map(() => ({ type: AntiHeroActions.REMOVE_ANTI_HERO_STATE, antiHeroId: data.payload })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
  // remove all anti-heroes in the database
  removeAllAntiHero$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AntiHeroActions.REMOVE_ALL_ANTI_HERO_API),
        mergeMap((data: {type: string, payload: string[]}) => 
        forkJoin([...data.payload.map((id) => this.antiHeroService.deleteAntiHero(id))])
          .pipe(
            map(() => ({ type: AntiHeroActions.REMOVE_ALL_ANTI_HERO_STATE })),
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
 
  constructor(
    private actions$: Actions,
    private antiHeroService: AntiHeroService,
    private router: Router
  ) {}
}