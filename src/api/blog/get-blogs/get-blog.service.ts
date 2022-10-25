import { Blog } from 'src/entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetBlogService {
  constructor(
    // @Inject('BLOG_REPOSITORY')
    @InjectRepository(Blog)
    private readonly blogRepo: Repository<Blog>,
  ) {}

  public async getBlogs(): Promise<Blog[]> {
    return this.blogRepo.findAll();
  }
}
