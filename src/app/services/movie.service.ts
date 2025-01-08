import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  // Metoda pro vyhledání filmů
  searchMovies(query: string) {
    return this.http.get(`${this.apiUrl}`, {
      params: {
        apikey: environment.omdbApiKey,
        s: query,
      },
    });
  }

  getMovieDetails(imdbID: string) {
    return this.http.get(`${this.apiUrl}`, {
      params: {
        apikey: environment.omdbApiKey,
        i: imdbID, // Vyhledáváme pomocí ID
      },
    });
  }
}
