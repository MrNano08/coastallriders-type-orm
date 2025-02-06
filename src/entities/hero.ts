import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'hero'})
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 60})
    title: string;

    @Column({length: 100})
    text: string;

    @Column({length: 20})
    btnText: string;
}