import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginSuccess, loginFailure, getProfileInfo, getProfileSuccess } from "./auth.actions";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { LoginService } from "../login/login.service";
import { Router } from "@angular/router";
import { ProfileService } from "../profile/profile.service";

export const loginEffect = createEffect(
  (actions$ = inject(Actions), loginService = inject(LoginService), router = inject(Router)) => {
    return actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        loginService.login({ username, password }).pipe(
          map((response) => {
            localStorage.setItem("access_token", response.access_token);
            return loginSuccess();
          }),
          catchError((error) => of(loginFailure({ error: error.message })))
        )
      ),
      tap(() => {
        router.navigate(["/home"]);
      })
    );
  },
  { functional: true }
);

export const getProfileInfoEff = createEffect(
  (actions$ = inject(Actions), profileService = inject(ProfileService), router = inject(Router)) => {
    return actions$.pipe(
      ofType(getProfileInfo),
      switchMap(() =>
        profileService.profileDetails$.pipe(
          map((response) => {
            return getProfileSuccess({
              avatar: `https://image.tmdb.org/t/p/w500${response.avatar.tmdb.avatar_path}`,
              username: response.username,
              name: response.name,
            });
          }),
          catchError((error) => of(loginFailure({ error: error.message })))
        )
      )
    );
  },
  { functional: true }
);
