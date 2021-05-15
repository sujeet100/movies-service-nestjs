import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMovies1621093920198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `Insert into movies values(1, 'Batman Begins', 2005, 'https://www.foumovies.se//wp-content/uploads/2020/08/Batman-Begins-Free-Movie-Download-HD-203x300.jpg')`,
    );
    await queryRunner.query(
      `Insert into movies values(2, 'The Dark Knight', 2008, 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg')`,
    );
    await queryRunner.query(
      `Insert into movies values(3, 'The Dark Knight Rises', 2012, 'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg');`,
    );
    await queryRunner.query(
      `Insert into movies values(4, 'Joker', 2019, 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
