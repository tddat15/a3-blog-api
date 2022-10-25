import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import { PostBlogService } from './post-blog.service';
import { Blog } from 'src/entity';
import { PostBlogBody } from './PostBlogDto';

@ApiTags('Blogs')
@Controller('blog')
export class PostBlogController {
  constructor(private readonly postBlogService: PostBlogService) {
    this.postBlogService;
  }
  @Post('/')
  private async postBlog(@Body() body: PostBlogBody): Promise<Blog> {
    return this.postBlogService.postBLog(body);
  }
}
