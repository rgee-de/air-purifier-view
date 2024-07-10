import {createFeatureSelector, createSelector} from '@ngrx/store';
import {airPurifierControlFeatureKey, AirPurifierControlState} from "./air-purifier-control.reducer";
import * as AirPurifierActions from './air-purifier-control.action';

const selectAirPurifierControlState = createFeatureSelector<AirPurifierControlState>(airPurifierControlFeatureKey);


export const selectIsStartLoading = createSelector(
  selectAirPurifierControlState,
  (state) => state.loading[AirPurifierActions.start.type]
);

export const selectIsStopLoading = createSelector(
  selectAirPurifierControlState,
  (state) => state.loading[AirPurifierActions.stop.type]
);

export const selectIsSleepLoading = createSelector(
  selectAirPurifierControlState,
  (state) => state.loading[AirPurifierActions.sleep.type]
);

export const selectIsTurboLoading = createSelector(
  selectAirPurifierControlState,
  (state) => state.loading[AirPurifierActions.turbo.type]
);

export const selectIsModeALoading = createSelector(
  selectAirPurifierControlState,
  (state) => state.loading[AirPurifierActions.modeA.type]
);

export const selectIsModePLoading = createSelector(
  selectAirPurifierControlState,
  (state) => state.loading[AirPurifierActions.modeP.type]
);

export const selectIsAnyLoading = createSelector(
  selectIsStartLoading,
  selectIsStopLoading,
  selectIsSleepLoading,
  selectIsTurboLoading,
  selectIsModeALoading,
  selectIsModePLoading,
  (isStartLoading, isStopLoading, isSleepLoading, isTurboLoading, isModeALoading, isModePLoading) =>
    isStartLoading || isStopLoading || isSleepLoading || isTurboLoading || isModeALoading || isModePLoading
);
