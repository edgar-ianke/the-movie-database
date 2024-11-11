import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { ProfileService } from "./profile.service";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import { selectProfileInfo } from "../store/auth.selectors";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatGridListModule],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  store = inject(Store);
  avatar!: string;
  name!: string;
  username!: string;
  ngOnInit(): void {
    this.store
      .select(selectProfileInfo)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        if (data) {
          this.avatar = data.avatar;
          this.name = data.name;
          this.username = data.username;
        }
      });
  }
}
