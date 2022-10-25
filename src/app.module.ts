import { Module } from '@nestjs/common';
import { BlogModule } from './api/blog/blog.module';
// import { DatabaseModule } from './database/database.module';
@Module({
  imports: [BlogModule],
})
export class AppModule {}
