import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Blog } from 'src/entity';
import { GetBlogService } from './get-blog.service';

@ApiTags('BLog')
@Controller('/blog')
export class GetBlogController {
  constructor(private readonly blogService: GetBlogService) {
    this.blogService;
  }
  @Get('/')
  public async getBlogs(): Promise<Blog[]> {
    return await this.blogService.getBlogs();
  }
}
