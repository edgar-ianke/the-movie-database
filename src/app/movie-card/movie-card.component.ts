import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Genre, Movie } from "../../interfaces/interfaces";
import { DatePipe, DecimalPipe, JsonPipe } from "@angular/common";

@Component({
  selector: "app-movie-card",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, JsonPipe, DatePipe, DecimalPipe],
  templateUrl: "./movie-card.component.html",
  styleUrl: "./movie-card.component.scss",
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() index!: number;
  @Input() genres!: Genre[];
  filteredGenre!: string;
  imageSrc!: string;
  ngOnInit(): void {
    this.filteredGenre = this.genres?.filter((item) => this.movie.genre_ids.includes(item.id)).map((item) => item.name).join(', ');
    this.imageSrc = `https://image.tmdb.org/t/p/w300${this.movie.poster_path}`
    this.movie.vote_count = this.movie.vote_count / 1000
  }
}
