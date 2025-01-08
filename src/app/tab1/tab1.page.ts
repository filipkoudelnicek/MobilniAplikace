import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab1Page {
  movies: any[] = [];
  favorites: any[] = [];

  constructor(private movieService: MovieService) {}

  async ionViewWillEnter() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  search(event: any) {
    const query = event.target.value.toLowerCase().trim();
    if (query) {
      this.movieService.searchMovies(query).subscribe((response: any) => {
        this.movies = response.Search || []; // Zpracování odpovědi
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
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
