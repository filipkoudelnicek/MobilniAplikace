import { Component } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class Tab2Page {
  favorites: any[] = []; // Oblíbené filmy

  constructor(private favoriteService: FavoriteService) {}

  async ionViewWillEnter() {
    // Načtení oblíbených filmů
    this.favorites = await this.favoriteService.getFavorites();
  }

  async removeFromFavorites(movie: any) {
    // Odstranění filmu z oblíbených
    this.favorites = this.favorites.filter(fav => fav.imdbID !== movie.imdbID);
    await this.favoriteService.saveFavorites(this.favorites);
  }
}
