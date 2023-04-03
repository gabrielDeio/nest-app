import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'pgsql',
  port: 5432,
  username: 'gabriel',
  password: '12345',
  database: 'gabriel',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};