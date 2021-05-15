import { EntityRepository, getRepository, Repository } from 'typeorm';
import { MovieEntity } from './movie.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(MovieEntity)
export class MoviesRepository extends Repository<MovieEntity> {
  getMovies(): Promise<Array<MovieEntity>> {
    return getRepository(MovieEntity)
      .createQueryBuilder('movies')
      .select()
      .where('movies.year > :year', { year: 1000 })
      .getMany();
  }
}
