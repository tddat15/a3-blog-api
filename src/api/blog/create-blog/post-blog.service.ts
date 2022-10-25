import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/entity';
import { Repository } from 'typeorm';
import { PostBlogBody } from './PostBlogDto';
@Injectable()
export class PostBlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepo: Repository<Blog>,
  ) {}
  public async postBLog(options: PostBlogBody): Promise<Blog> {
    return await this.blogRepo.insertAndReturn(
      new Blog({
        ...options,
      }),
    );
  }
}
