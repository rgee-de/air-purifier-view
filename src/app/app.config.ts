import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideState, provideStore} from '@ngrx/store';
import {
  airPurifierControlFeatureKey,
  airPurifierControlReducer
} from "./store/air-purifier-control/air-purifier-control.reducer";
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {
  airPurifierStatusFeatureKey,
  airPurifierStatusReducer
} from "./store/air-purifier-status/air-purifier-status.reducer";
import {provideEffects} from '@ngrx/effects';
import {AirPurifierControlEffects} from "./store/air-purifier-control/air-purifier-control.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({name: airPurifierControlFeatureKey, reducer: airPurifierControlReducer}),
    provideState({name: airPurifierStatusFeatureKey, reducer: airPurifierStatusReducer}),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideEffects(AirPurifierControlEffects)
  ]
};
