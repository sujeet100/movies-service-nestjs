import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRating1623155237989 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE movies ADD COLUMN rating integer`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
