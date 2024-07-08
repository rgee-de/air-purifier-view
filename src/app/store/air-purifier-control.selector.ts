import {createFeatureSelector, createSelector} from '@ngrx/store';
import {airPurifierControlFeatureKey, AirPurifierControlState} from "./air-purifier-control.reducer";

const selectAirPurifierControlState = createFeatureSelector<AirPurifierControlState>(airPurifierControlFeatureKey);


export const selectIsLoadingStart = createSelector(
  selectAirPurifierControlState,
  (state) => state.isLoadingStart
);


