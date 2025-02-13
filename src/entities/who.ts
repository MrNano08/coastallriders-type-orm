import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'who'})
export class Who {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    image_url: string;

    @Column({length: 30})
    title: string;
    
    @Column({length: 200})
    descripction: string;
}