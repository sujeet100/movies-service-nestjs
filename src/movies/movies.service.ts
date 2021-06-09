import { MoviesRepository } from './movies.repository';
import { Movie } from './movie';
import { Injectable } from '@nestjs/common';
import { updateRatingInput } from './update.rating.input';

@Injectable()
export class MoviesService {
  constructor(private readonly movieRepository: MoviesRepository) { }

  async getMovies(): Promise<Movie[]> {
    return (await this.movieRepository.getMovies()).map(
      (x) => new Movie(x.name, x.year, x.imageUrl, x.rating),
    );
  }

  async getMovie(id: number): Promise<Movie> {
    const movie = (await this.movieRepository.findOne({ where: { "id": id } }));
    return new Movie(movie.name, movie.year, movie.imageUrl, movie.rating);
  }

  async updateRating(updateRatingInput: updateRatingInput): Promise<Movie> {
    await this.movieRepository.update(updateRatingInput.id, {rating: updateRatingInput.rating})
    return this.getMovie(updateRatingInput.id);
  }
}
