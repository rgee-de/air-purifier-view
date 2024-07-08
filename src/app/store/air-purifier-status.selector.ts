import {createFeatureSelector, createSelector} from '@ngrx/store';
import {airPurifierStatusFeatureKey, AirPurifierStatusState} from "./air-purifier-status.reducer";

const selectAirPurifierStatusState = createFeatureSelector<AirPurifierStatusState>(airPurifierStatusFeatureKey);


export const selectPM25 = createSelector(
  selectAirPurifierStatusState,
  (state) => state.pm25
);

export const selectIsSleepMode = createSelector(
  selectAirPurifierStatusState,
  state => state.om === "s" && state.mode === "M"
)

export const selectIsTurboMode = createSelector(
  selectAirPurifierStatusState,
  state => state.om === "t" && state.mode === "M"
)

export const selectIsAllergeneMode = createSelector(
  selectAirPurifierStatusState,
  state => state.mode === "A"
)

export const selectIsGeneralMode = createSelector(
  selectAirPurifierStatusState,
  state => state.mode === "P"
)

export const selectIsOn = createSelector(
  selectAirPurifierStatusState,
  state => state.pwr === "1"
)

export const selectIsOff = createSelector(
  selectAirPurifierStatusState,
  state => state.pwr === "0"
)


