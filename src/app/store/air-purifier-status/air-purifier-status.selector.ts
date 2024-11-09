import {createFeatureSelector, createSelector} from '@ngrx/store';
import {airPurifierStatusFeatureKey, AirPurifierStatusState} from "./air-purifier-status.reducer";
import {selectIsAnyLoading} from "../air-purifier-control/air-purifier-control.selector";

// =========================================
// Selectors for Air Purifier Status State
// =========================================

const selectAirPurifierStatusState = createFeatureSelector<AirPurifierStatusState>(airPurifierStatusFeatureKey);

export const selectPm25 = createSelector(
  selectAirPurifierStatusState,
  (state) => state.pm25
);

export const selectIaql = createSelector(
  selectAirPurifierStatusState,
  (state) => state.iaql
);

export const selectFltsts0 = createSelector(
  selectAirPurifierStatusState,
  (state) => state.fltsts0
);

export const selectFltsts1 = createSelector(
  selectAirPurifierStatusState,
  (state) => state.fltsts1
);

export const selectFltsts2 = createSelector(
  selectAirPurifierStatusState,
  (state) => state.fltsts2
);

export const selectTimestamp = createSelector(
  selectAirPurifierStatusState,
  (state) => state.timestamp
);

// =========================================
// Selectors for Air Purifier Modes and Power
// =========================================

export const selectIsSleepMode = createSelector(
  selectAirPurifierStatusState,
  state => state.om === "s" && state.mode === "M"
);

export const selectIsTurboMode = createSelector(
  selectAirPurifierStatusState,
  state => state.om === "t" && state.mode === "M"
);

export const selectIsAllergeneMode = createSelector(
  selectAirPurifierStatusState,
  state => state.mode === "A"
);

export const selectIsGeneralMode = createSelector(
  selectAirPurifierStatusState,
  state => state.mode === "P"
);

export const selectIsOn = createSelector(
  selectAirPurifierStatusState,
  state => state.pwr === "1"
);

export const selectIsOff = createSelector(
  selectAirPurifierStatusState,
  state => state.pwr === "0"
);

// =========================================
// Selectors for Button Deactivation
// =========================================

export const selectIsStartButtonDeactivated = createSelector(
  selectIsOn,
  selectIsAnyLoading,
  // (isOn, isAnyLoading) => isOn || isAnyLoading
  (isOn, isAnyLoading) => isAnyLoading
);

export const selectIsStopButtonDeactivated = createSelector(
  selectIsOff,
  selectIsAnyLoading,
  (isOff, isAnyLoading) => isOff || isAnyLoading
);

export const selectIsFunctionButtonDeactivated = createSelector(
  selectIsAnyLoading,
  isAnyLoading => isAnyLoading
);
