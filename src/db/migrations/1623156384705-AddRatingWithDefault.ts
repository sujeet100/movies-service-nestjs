import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRatingWithDefault1623156384705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `update movies set rating = 8`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
