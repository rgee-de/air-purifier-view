import {createAction, props} from '@ngrx/store';

export const start = createAction('[Command] Start');
export const stop = createAction('[Command] Stop');
export const sleep = createAction('[Command] Sleep');
export const turbo = createAction('[Command] Turbo');
export const modeP = createAction('[Command] Mode P (General)');
export const modeA = createAction('[Command] Mode A (Allergen)');
export const setLoading = createAction('[Command] Set Loading', props<{ actionType: string, loading: boolean }>());
