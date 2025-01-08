import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  originalMovies  = [
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

  movies = [...this.originalMovies]; // Kopie původního pole

  search(event: any) {
    const query = event.target.value.toLowerCase();
    if (query.trim() === '') {
      this.movies = [...this.originalMovies]; // Obnovit původní pole, pokud je hledání prázdné
    } else {
      this.movies = this.originalMovies.filter(movie =>
        movie.title.toLowerCase().includes(query)
      );
    }
  }
}
