import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Length, IsNotEmpty } from "class-validator";

@Entity()
export class Label {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 200)
    name: string;

    @Column()
    @Length(4, 2000)
    nl: string;

    @Column()
    @Length(4, 2000)
    en: string;

    @Column()
    @Length(4, 2000)
    fr: string;

    @Column()
    @Length(4, 2000)
    de: string;

    @Column({ nullable: true })
    @Length(4, 2000)
    da: string;

    @Column()
    @Length(4, 2000)
    ar: string;

    @Column()
    @Length(4, 2000)
    fa: string;

    @Column()
    @Length(4, 2000)
    po: string;

    @Column()
    @Length(4, 2000)
    es: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}

export default Label;