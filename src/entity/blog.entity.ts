import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('blog')
export class Blog extends BaseEntity {
  @Column('uuid', { primary: true, name: 'id', nullable: false, default: () => 'uuid_generate_v4()' })
  id: string;

  @Column('character varying', { name: 'title', nullable: false })
  title: string;

  @Column('character varying', { name: 'description', nullable: true })
  description: string;

  @Column('character varying', { name: 'author', nullable: false })
  author: string;

  @Column('text', { name: 'content', nullable: false })
  content: string;

  public constructor(props?: Partial<Blog>) {
    super();
    if (props) this.update(props);
  }

  private update(props: Partial<Blog>): Blog {
    return Object.assign(this, props);
  }
}
