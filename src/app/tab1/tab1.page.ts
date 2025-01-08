import { Component } from '@angular/core';
import { AppStorageService } from '../app-storage.service';
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
  movies = [
    {
      title: 'Inception',
      overview: 'A skilled thief is given a chance at redemption if he can successfully perform an inception.',
    },
    {
      title: 'The Dark Knight',
      overview: 'Batman faces the Joker in a battle for Gotham City.',
    },
    {
      title: 'Interstellar',
      overview: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity’s survival.',
    },
  ];

  favorites: any[] = [];

  constructor(private appStorage: AppStorageService) {}

  async ionViewWillEnter() {
    this.favorites = (await this.appStorage.get('favorites')) || [];
  }

  search(event: any) {
    const query = event.target.value.toLowerCase();
    this.movies = this.movies.filter(movie => movie.title.toLowerCase().includes(query));
  }

  isFavorite(movie: any): boolean {
    return this.favorites.some(fav => fav.title === movie.title);
  }

  async toggleFavorite(movie: any) {
    if (this.isFavorite(movie)) {
      this.favorites = this.favorites.filter(fav => fav.title !== movie.title);
    } else {
      this.favorites.push(movie);
    }
    await this.appStorage.set('favorites', this.favorites);
  }
}
