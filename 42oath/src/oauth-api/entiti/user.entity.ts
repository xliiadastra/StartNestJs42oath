/*
    서비스로 보내고 받을 클래스(인터페이스)
    나중에 PostSQL 이 들어갈 곳은 entiti 폴더이다.
*/

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @Column()
    email: string;

    @Column()
    avatar: string;

    @Column()
    win: number;

    @Column()
    lose: number;

    @Column()
    level: number;

    @Column()
    user_status: number;
}