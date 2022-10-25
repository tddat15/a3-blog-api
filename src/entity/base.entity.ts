import { BaseEntity as Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity extends Entity {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone', default: () => 'now()' })
  public createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone', default: () => 'now()' })
  public updatedAt!: Date;
}
