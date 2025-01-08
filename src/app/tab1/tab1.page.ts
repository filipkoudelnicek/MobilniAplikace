import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { FavoriteService } from '../services/favorite.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class Tab1Page {
  movies: any[] = [];
  favorites: any[] = [];

  constructor(
    private movieService: MovieService,
    private favoriteService: FavoriteService
  ) {}

  async ionViewWillEnter() {
    this.favorites = await this.favoriteService.getFavorites();
  }

  search(event: any) {
    const query = event.target.value.trim();
    if (query) {
      this.movieService.searchMovies(query).subscribe((response: any) => {
        this.movies = response.Search || [];
      });
    } else {
      this.movies = [];
    }
  }

  isFavorite(movie: any): boolean {
    return this.favorites.some(fav => fav.imdbID === movie.imdbID);
  }

  async toggleFavorite(movie: any) {
    if (this.isFavorite(movie)) {
      this.favorites = this.favorites.filter(fav => fav.imdbID !== movie.imdbID);
    } else {
      this.favorites.push(movie);
    }
    await this.favoriteService.saveFavorites(this.favorites);
  }
}
