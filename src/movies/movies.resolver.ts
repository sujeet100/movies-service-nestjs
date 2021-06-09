import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { of } from 'rxjs';
import { Movie } from './models/movie.model';
import { MoviesService } from './movies.service';
import { updateRatingInput } from './update.rating.input';

@Resolver((of) => Movie)
export class MovieResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query((returns) => Movie)
  async movie(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.getMovie(id);
  }

  @Mutation((returns) => Movie)
  async updateRating(
    @Args('updateRatingInput') updateRatingInput: updateRatingInput,
  ) {
    return this.moviesService.updateRating(updateRatingInput);
  }
}
