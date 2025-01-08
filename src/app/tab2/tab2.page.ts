import { Component } from '@angular/core';
import { AppStorageService } from '../app-storage.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab2Page {
  favorites: any[] = [];

  constructor(private appStorage: AppStorageService) {}

  async ionViewWillEnter() {
    // Zajištění aktualizace seznamu při každém zobrazení tabu
    this.loadFavorites();
  }

  async loadFavorites() {
    this.favorites = (await this.appStorage.get('favorites')) || [];
  }

  async removeFromFavorites(movie: any) {
    this.favorites = this.favorites.filter(fav => fav.title !== movie.title);
    await this.appStorage.set('favorites', this.favorites);
  }
}
