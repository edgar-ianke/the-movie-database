import { createReducer, on } from "@ngrx/store";
import { loginSuccess, loginFailure, getProfileInfo, getProfileSuccess } from "./auth.actions";

export interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
  profileInfo: { avatar: string; username: string; name: string } | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
  profileInfo: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state) => ({
    ...state,
    isAuthenticated: true,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false,
  })),
  on(getProfileSuccess, (state, { avatar, username, name }) => ({
    ...state,
    profileInfo: {
      avatar,
      username,
      name,
    },
  }))
);
