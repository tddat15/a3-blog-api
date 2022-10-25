import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Blog } from 'src/entity';
import { GetBlogService } from './get-blog.service';

@ApiTags('Blog')
@Controller('/blog')
export class GetBlogController {
  constructor(private readonly getBlogService: GetBlogService) {
    this.getBlogService;
  }
  @Get('/')
  public async getBlogs(): Promise<Blog[]> {
    return await this.getBlogService.getBlogs();
  }
}
