import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../entity/User";

export class CreateAdminUser1556694365136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const userRepository = getRepository(User);

        let technicalAdministrator = new User();
        technicalAdministrator.username = "admin";
        technicalAdministrator.password = "Welkom123!";
        technicalAdministrator.hashPassword();
        technicalAdministrator.role = "TECHNICALADMINISTRATOR";
        technicalAdministrator.team = "Think1st";
        await userRepository.save(technicalAdministrator);

        let normalUser = new User();
        normalUser.username = "demo_user";
        normalUser.password = "demo_user";
        normalUser.hashPassword();
        normalUser.role = "NORMALUSER";
        normalUser.team = "Think1st";
        await userRepository.save(normalUser);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
