import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { of, switchMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private http = inject(HttpClient);
  constructor() {}

  login({ username, password }: { username: string; password: string }) {
    if (username === "edgaryanke" && password === "6#Tmded6Wjq5eGJ") {
      return of({
        access_token:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTAxOTk2OGI5NDE0OTMxODQ0MzYwODVmZDA1MmZjZCIsIm5iZiI6MTczMDExMjcyOS42MjM2Mywic3ViIjoiNjcxZjYyYjI2ZDZiNzA1ZGM4NzFlYjUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qojz3HXAAbgzmJKsWqyn5qf_wrMaRIF4yOjduOSAvgg",
      });
    }
    throw new Error("Incorrect username or passowrd");
  }
}
