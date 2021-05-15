import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMoviesTable1621062156851 implements MigrationInterface {
  name = 'CreateMoviesTable1621062156851';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year" integer NOT NULL, "imageUrl" character varying NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movies"`);
  }
}
