import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {ControlService} from '../../services/control.service';
import * as AirPurifierActions from './air-purifier-control.action';
import {ActionCreator} from '@ngrx/store';

@Injectable()
export class AirPurifierControlEffects {

  start$ = this.createEffectForAction(AirPurifierActions.start, this.controlService.start.bind(this.controlService));
  stop$ = this.createEffectForAction(AirPurifierActions.stop, this.controlService.stop.bind(this.controlService));
  sleep$ = this.createEffectForAction(AirPurifierActions.sleep, this.controlService.sleep.bind(this.controlService));
  turbo$ = this.createEffectForAction(AirPurifierActions.turbo, this.controlService.turbo.bind(this.controlService));
  modeA$ = this.createEffectForAction(AirPurifierActions.modeA, this.controlService.modeA.bind(this.controlService));
  modeP$ = this.createEffectForAction(AirPurifierActions.modeP, this.controlService.modeP.bind(this.controlService));

  constructor(
    private actions$: Actions,
    private controlService: ControlService
  ) {
  }

  private createEffectForAction(
    actionType: ActionCreator<string>,
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
