import { createReducer, on } from '@ngrx/store';
import * as AirPurifierActions from './air-purifier-control.action';

export interface AirPurifierControlState {
  isLoadingStart: boolean;
}

export const airPurifierControlFeatureKey = 'air-purifier-control';
export const initialAirPurifierControlState: AirPurifierControlState = {
  isLoadingStart: false,
};

export const airPurifierControlReducer = createReducer(
  initialAirPurifierControlState,
  on(AirPurifierActions.start, state => ({ ...state, isLoadingStart: true })),
  on(AirPurifierActions.startLoading, (state, action) => ({ ...state, isLoadingStart: action.loading })),
);
