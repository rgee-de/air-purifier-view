import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {ControlService} from '../../services/control.service';
import * as AirPurifierActions from './air-purifier-control.action';
import {ActionCreator} from '@ngrx/store';

@Injectable()
export class AirPurifierControlEffects {

  // noinspection JSUnusedGlobalSymbols
  start$ = this.createEffectForAction(AirPurifierActions.start, this.controlService.start.bind(this.controlService));
  // noinspection JSUnusedGlobalSymbols
  stop$ = this.createEffectForAction(AirPurifierActions.stop, this.controlService.stop.bind(this.controlService));
  // noinspection JSUnusedGlobalSymbols
  sleep$ = this.createEffectForAction(AirPurifierActions.sleep, this.controlService.sleep.bind(this.controlService));
  // noinspection JSUnusedGlobalSymbols
  turbo$ = this.createEffectForAction(AirPurifierActions.turbo, this.controlService.turbo.bind(this.controlService));
  // noinspection JSUnusedGlobalSymbols
  modeA$ = this.createEffectForAction(AirPurifierActions.modeA, this.controlService.modeA.bind(this.controlService));
  // noinspection JSUnusedGlobalSymbols
  modeP$ = this.createEffectForAction(AirPurifierActions.modeP, this.controlService.modeP.bind(this.controlService));

  constructor(
    private readonly actions$: Actions,
    private readonly controlService: ControlService
  ) {
  }

  private createEffectForAction(
    actionType: ActionCreator,
    controlMethod: () => Observable<any>
  ) {
    return createEffect(() => this.actions$.pipe(
      ofType(actionType),
      exhaustMap(() => {
        const actionTypeString = actionType.type;
        return controlMethod().pipe(
          map(() => AirPurifierActions.setLoading({actionType: actionTypeString, loading: false})),
          catchError(() => EMPTY)
        );
      })
    ));
  }
}
