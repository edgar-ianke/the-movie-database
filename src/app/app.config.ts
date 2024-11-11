import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { requestInterceptor } from "./request.interceptor";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { getProfileInfoEff, loginEffect } from "./store/auth.effects";
import { authReducer } from "./store/auth.reducers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([requestInterceptor])),
    provideStore({auth: authReducer}),
    provideEffects({login: loginEffect, profile: getProfileInfoEff}),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    })
  ],
};

