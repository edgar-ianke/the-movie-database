import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectIsAuthenticated, selectProfileInfo } from "../store/auth.selectors";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  store = inject(Store);
  avatar!: string;
  name!: string;
  isAuth!: boolean
  ngOnInit(): void {
    this.store
      .select(selectProfileInfo)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        if (data) {
          this.isAuth = true;
          this.avatar = data.avatar;
          this.name = data.name;
        }
      });
  }
}
