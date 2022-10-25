import { Blog } from 'src/entity';
import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'arjuna.db.elephantsql.com',
        port: 5432,
        username: 'frfpqnno',
        password: 'kyzOmgqV6-YoQEoFCZakwWJyx0ppbkSa',
        database: 'frfpqnno',
        entities: [Blog],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
