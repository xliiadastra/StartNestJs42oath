import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/../**/**/*.entity.{js,ts}'], // 엔티티를 이용해서 데이터베이스 테이블을 생성해준다. 그래서 앤티티 파일이 어디있는 지 설정.
    synchronize: true, // true 값을 주면 앱이 다시 실행할 때 앤티티안의 수정된 컬럼의 길이 타입 변경값 등을 해당 테이블에 Drop한 후 다시 생성.
}