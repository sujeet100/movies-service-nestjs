import { MoviesRepository } from './movies.repository';
import { Movie } from './movie';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  constructor(private readonly movieRepository: MoviesRepository) {}

  async getMovies(): Promise<Movie[]> {
    return (await this.movieRepository.getMovies()).map(
      (x) => new Movie(x.name, x.year, x.imageUrl, 0),
    );
  }
}
