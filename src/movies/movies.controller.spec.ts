import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MoviesRepository } from './movies.repository';

describe('MoviesController', () => {
  let moviesController: MoviesController;
  let moviesService: MoviesService;
  let movieRepository: MoviesRepository;

  beforeEach(() => {
    moviesService = new MoviesService(movieRepository);
    moviesController = new MoviesController(moviesService);
  });
  describe('getProducts', () => {
    it('should fetch movies', async () => {
      const movies = [
        {
          id: 1,
          name: 'Batman',
          year: 2020,
          imageUrl: 'http://foo.com',
          rating: 0,
        },
        {
          id: 2,
          name: 'Batman2',
          year: 2021,
          imageUrl: 'http://foo.com',
          rating: 0,
        },
      ];

      jest
        .spyOn(moviesService, 'getMovies')
        .mockImplementation(() => Promise.resolve(movies));

      expect(await moviesController.getMovies()).toStrictEqual(movies);
    });
  });
});
