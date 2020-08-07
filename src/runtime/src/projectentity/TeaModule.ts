import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Length, IsNotEmpty } from "class-validator";

@Entity()
export class TeaModule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 200)
    name: string;

    @Column()
    scripts: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}

export default TeaModule;