import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMoreMovies1621098175500 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `Insert into movies values(5, 'Batman 4', 2030, 'https://www.foumovies.se//wp-content/uploads/2020/08/Batman-Begins-Free-Movie-Download-HD-203x300.jpg')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
