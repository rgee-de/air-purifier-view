import {createFeatureSelector, createSelector} from '@ngrx/store';
import {airPurifierControlFeatureKey, AirPurifierControlState} from "./air-purifier-control.reducer";

const selectAirPurifierControlState = createFeatureSelector<AirPurifierControlState>(airPurifierControlFeatureKey);


export const selectIsLoading = createSelector(
  selectAirPurifierControlState,
  (state) => state.isLoading
);


