import { Movie } from './movie';
import { MoviesService } from './movies.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class MoviesController {
  private moviesService: MoviesService;

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
  }

  @Get('/movies')
  async getMovies(): Promise<Movie[]> {
    return this.moviesService.getMovies();
  }
}
