import { INestApplication } from '@nestjs/common';
import { MoviesModule } from './movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import testConfig from '../../ormconfig.test';
import { Test } from '@nestjs/testing';
import { MoviesRepository } from './movies.repository';
import { MovieEntity } from './movie.entity';

let app: INestApplication;
let repository: MoviesRepository;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      MoviesModule,
      TypeOrmModule.forRoot({ ...testConfig, entities: [MovieEntity] }),
    ],
  }).compile();
  app = module.createNestApplication();
  repository = module.get('MoviesRepository');
  await app.init();
  await repository.clear();
});

describe('MoviesRepository', () => {
  describe('getMovies', () => {
    it('should return movies', async () => {
      const batman = {
        id: 1,
        imageUrl: 'http://foo.com',
        name: 'Batman',
        year: 2020,
      };
      const joker = {
        id: 2,
        imageUrl: 'http://bar.com',
        name: 'Joker',
        year: 2021,
      };

      await repository.save(batman);
      await repository.save(joker);

      const movies = await repository.getMovies();

      expect(movies).toEqual([batman, joker]);
    });
  });
});

afterAll(async () => {
  await app.close();
});
