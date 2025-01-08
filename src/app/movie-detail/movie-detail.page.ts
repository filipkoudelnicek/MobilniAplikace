import { Component, OnInit } from '@angular/core'; // Import OnInit
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { MovieService } from '../services/movie.service'; // Import MovieService
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class MovieDetailPage implements OnInit {
  movie: any = null; // Detail filmu

  constructor(
    private route: ActivatedRoute, // Aktivní cesta pro získání parametru
    private movieService: MovieService // Služba pro načtení dat z API
  ) {}

  ngOnInit() {
    // Získání imdbID z URL
    const imdbID = this.route.snapshot.paramMap.get('id');
    if (imdbID) {
      this.loadMovieDetails(imdbID);
    }
  }

  loadMovieDetails(imdbID: string) {
    this.movieService.getMovieDetails(imdbID).subscribe((response: any) => {
      this.movie = response; // Načtení detailu filmu
    });
  }
}
