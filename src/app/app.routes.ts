import { Routes } from "@angular/router";
import { TopMoviesComponent } from "./top-movies/top-movies.component";
import { LoginComponent } from "./login/login.component";
import { loginGuard } from "./guards/login.guard";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "top", canActivate: [], loadComponent: () => import("./top-movies/top-movies.component").then((m) => m.TopMoviesComponent) },
  { path: "login", component: LoginComponent, canActivate: [] },
  { path: "profile", component: ProfileComponent, canActivate: [loginGuard] },
];
