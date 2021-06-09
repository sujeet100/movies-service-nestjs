import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { MovieEntity } from './movie.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieResolver } from './movies.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, MoviesRepository])],
  controllers: [MoviesController],
  providers: [MoviesService, MovieResolver],
})
export class MoviesModule {}
