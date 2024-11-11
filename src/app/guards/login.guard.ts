import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthState } from "../store/auth.reducers";
import { Store } from "@ngrx/store";
import {  selectIsAuthenticated } from "../store/auth.selectors";

export const loginGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const authState$: Observable<boolean> = store.select(selectIsAuthenticated);
  const router = inject(Router);
  return authState$.pipe(
    take(1),
    map((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        router.navigate(["/login"]);
        return false;
      }
      if (state.url === "/login") {
        router.navigate(["/profile"]);
      }
      return true;
    })
  );
};
