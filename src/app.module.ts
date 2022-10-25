import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './api/blog/blog.module';
import { Blog } from './entity';
// import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'arjuna.db.elephantsql.com',
      port: 5432,
      username: 'frfpqnno',
      password: 'kyzOmgqV6-YoQEoFCZakwWJyx0ppbkSa',
      database: 'frfpqnno',
      entities: [Blog],
      synchronize: false,
    }),
    BlogModule,
  ],
})
export class AppModule {}
