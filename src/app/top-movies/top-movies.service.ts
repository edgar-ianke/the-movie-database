import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map, shareReplay } from "rxjs";
import { ApiResponse, GenresResponse, Movie } from "../../interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class TopMoviesService {
  private http = inject(HttpClient);
  constructor() {}
  getTopMovies(page: number) {
  return this.http
    .get<ApiResponse<Movie>>(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`)
    .pipe( map(res => {
      return res.results}));
  
  } 

  getGenres() {
   return this.http.get<GenresResponse>("https://api.themoviedb.org/3/genre/movie/list?language=en");
  }
}