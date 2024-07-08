import { createReducer, on } from '@ngrx/store';
import * as AirPurifierActions from './air-purifier-control.action';

export interface AirPurifierControlState {
  isLoading: boolean;
}

export const airPurifierControlFeatureKey = 'air-purifier-control';
export const initialAirPurifierControlState: AirPurifierControlState = {
  isLoading: false,
};

export const airPurifierControlReducer = createReducer(
  initialAirPurifierControlState,
  on(
    AirPurifierActions.start,
    AirPurifierActions.stop,
    AirPurifierActions.sleep,
    AirPurifierActions.turbo,
    AirPurifierActions.modeP,
    AirPurifierActions.modeA,
      state => ({ ...state, isLoading: true })),
  on(AirPurifierActions.setLoading, (state, action) => ({ ...state, isLoading: action.loading })),
);
