import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {CommandService} from "../services/command.service";
import * as AirPurifierActions from './air-purifier-control.action';


@Injectable()
export class AirPurifierControlEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType(AirPurifierActions.start),
      exhaustMap(() => this.controlService.start()
        .pipe(
          map(movies => (AirPurifierActions.startLoading({loading: false}))),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private controlService: CommandService
  ) {}
}
