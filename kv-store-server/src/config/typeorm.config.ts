import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_USER,
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'kvstore',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
