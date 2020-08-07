import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Length, IsNotEmpty } from "class-validator";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 200)
    name: string;

    @Column()
    @Length(4, 200)
    team: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}

export default Project;