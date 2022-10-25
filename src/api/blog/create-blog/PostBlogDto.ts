import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PostBlogBody {
  @ApiProperty({
    required: true,
    example: '',
    description: '',
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: true,
    example: '',
    description: '',
  })
  @IsString()
  description: string;

  @ApiProperty({
    required: true,
    example: '',
    description: '',
  })
  @IsString()
  author: string;

  @ApiProperty({
    required: true,
    example: '',
    description: '',
  })
  @IsString()
  content: string;
}
