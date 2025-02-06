import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'feedbacks'})
export class Feedback {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    image_url: string;

    @Column({length: 30})
    customer_name: string;

    @Column({length: 30})
    sotial_media: string;

    @Column({length: 500})
    customer_comment: string;
}