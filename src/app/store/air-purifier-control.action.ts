import {createAction, props} from "@ngrx/store";


export const start = createAction('[Command] Start');
export const startLoading = createAction('[Command] Start Loading', props<{loading: boolean}>());
