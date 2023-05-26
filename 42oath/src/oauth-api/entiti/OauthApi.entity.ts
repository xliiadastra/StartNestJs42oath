/*
    서비스로 보내고 받을 클래스(인터페이스)
    나중에 PostSQL 이 들어갈 곳은 entiti 폴더이다.
*/

export class User {
    id: number;
    email: string;
    login: string;
    url: string;
    image: {
        link: string;
    }
}