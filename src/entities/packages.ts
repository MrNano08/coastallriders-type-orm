import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'packages'})
export class Package {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    image_url: string;

    @Column({length: 50})
    title: string;
    
    @Column({length: 30})
    type: string;
}