import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'pgsql',
                port: 5432,
                username: 'gabriel',
                password: '12345',
                database: 'gabriel',
                entities: [__dirname + '/../**/*.entity.{js,ts}'],
                synchronize: true,
            })

            return dataSource.initialize();
        }
    }
]