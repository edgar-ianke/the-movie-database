import { Component, DestroyRef, OnDestroy, OnInit, inject } from "@angular/core";
import { TopMoviesService } from "./top-movies.service";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Genre, Movie } from "../../interfaces/interfaces";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-top-movies",
  standalone: true,
  imports: [JsonPipe, AsyncPipe, MovieCardComponent, MatProgressSpinnerModule],
  templateUrl: "./top-movies.component.html",
  styleUrl: "./top-movies.component.scss",
})
export class TopMoviesComponent implements OnInit, OnDestroy {
  genres!: Genre[];
  topMoviesService = inject(TopMoviesService);
  topMovies: Movie[] = [];
  isLoading = true;
  pageIndex = 1;
  private destroyRef = inject(DestroyRef);
  onScroll(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (!this.isLoading && scrollTop + 5 + clientHeight > scrollHeight) {
      this.loadMovies();
    }
  }

  loadMovies() {
    this.isLoading = true;
    this.topMoviesService
      .getTopMovies(this.pageIndex)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.pageIndex++;
        this.topMovies = [...this.topMovies, ...data];
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.topMoviesService
      .getGenres()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => (this.genres = data.genres));
    this.loadMovies();
  }
  ngOnDestroy(): void {}
}
