/*
    서비스로 보내고 받을 클래스(인터페이스)
    나중에 PostSQL 이 들어갈 곳은 entiti 폴더이다.
*/

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // Entity() 데코레이터 클래스는 User 클래스가 엔티티임을 나타내는데 사용된다.
export class User {
    @PrimaryGeneratedColumn() // 이 데코레이터 클래스는 id 열이 User 엔티티의 기본 키 열임을 나타냄.
    id: number;

    @Column() // 이 데코레이터 클래스는 User 엔티티의 title 및 description 과 같은 다른 열을 나타내는 사용.(여기선 nickname, email 등)
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