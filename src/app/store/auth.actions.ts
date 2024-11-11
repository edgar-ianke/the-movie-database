import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const getProfileInfo = createAction(
  '[Auth] Profile Info',
)

export const getProfileSuccess = createAction(
  '[Auth] Profile Info Success',
  props<{avatar: string; username: string; name: string}>()
)