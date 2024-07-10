import {createReducer, on} from '@ngrx/store';
import * as AirPurifierActions from './air-purifier-control.action';

export interface AirPurifierControlState {
  loading: { [key: string]: boolean };
}

export const airPurifierControlFeatureKey = 'air-purifier-control';

export const initialAirPurifierControlState: AirPurifierControlState = {
  loading: {
    [AirPurifierActions.start.type]: false,
    [AirPurifierActions.stop.type]: false,
    [AirPurifierActions.sleep.type]: false,
    [AirPurifierActions.turbo.type]: false,
    [AirPurifierActions.modeP.type]: false,
    [AirPurifierActions.modeA.type]: false,
  }
};

export const airPurifierControlReducer = createReducer(
  initialAirPurifierControlState,
  on(AirPurifierActions.start, state => ({
    ...state,
    loading: {...state.loading, [AirPurifierActions.start.type]: true}
  })),
  on(AirPurifierActions.stop, state => ({...state, loading: {...state.loading, [AirPurifierActions.stop.type]: true}})),
  on(AirPurifierActions.sleep, state => ({
    ...state,
    loading: {...state.loading, [AirPurifierActions.sleep.type]: true}
  })),
  on(AirPurifierActions.turbo, state => ({
    ...state,
    loading: {...state.loading, [AirPurifierActions.turbo.type]: true}
  })),
  on(AirPurifierActions.modeA, state => ({
    ...state,
    loading: {...state.loading, [AirPurifierActions.modeA.type]: true}
  })),
  on(AirPurifierActions.modeP, state => ({
    ...state,
    loading: {...state.loading, [AirPurifierActions.modeP.type]: true}
  })),
  on(AirPurifierActions.setLoading, (state, {actionType, loading}) => ({
    ...state,
    loading: {...state.loading, [actionType]: loading}
  }))
);
