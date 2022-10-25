// import { DatabaseModule } from 'src/database/database.module';
import { Module } from '@nestjs/common';
import * as useCases from './use-cases';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Blog } from 'src/entity';
// import { blogProviders } from 'src/database/provider/blog.provider';
// import { GetBlogController, GetBlogService } from './getBlogs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/entity';
// import { DataSource } from 'typeorm';

const applications = Object.values(useCases);
const controllers = applications.filter((x) => x.name.endsWith('Controller'));
const services = applications.filter((x) => x.name.endsWith('Service'));

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [...controllers],
  providers: [...services],
})
export class BlogModule {}
