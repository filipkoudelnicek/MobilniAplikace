import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Inicializace úložiště
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async getFavorites(): Promise<any[]> {
    return (await this._storage?.get('favorites')) || [];
  }

  async saveFavorites(favorites: any[]): Promise<void> {
    await this._storage?.set('favorites', favorites);
  }
}
