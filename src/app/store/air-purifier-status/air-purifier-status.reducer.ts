import { createReducer, on } from '@ngrx/store';
import * as AirPurifierStatusActions from './air-purifier-status.action';
import {defaultStatusModel, StatusModel} from "../../models/status.model";

export interface AirPurifierStatusState extends StatusModel {}

export const airPurifierStatusFeatureKey = 'air-purifier-status';
export const initialState: AirPurifierStatusState = {...defaultStatusModel};

export const airPurifierStatusReducer = createReducer(
  initialState,
  on(AirPurifierStatusActions.update, (state, action) => ({ ...state, ...action.status })),
);
