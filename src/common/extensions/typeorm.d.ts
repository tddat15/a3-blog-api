import { FindManyOptions, FindOneOptions, ObjectLiteral, SaveOptions } from 'typeorm';

export declare module 'typeorm' {
  export interface Repository<Entity extends ObjectLiteral> {
    findAll(options?: FindManyOptions<Entity>): Promise<Entity[]>;
    findAllAndCount(options?: FindManyOptions<Entity>): Promise<[Entity[], number]>;
    findByIdOrFail(id: string | number, options?: FindOneOptions<Entity>): Promise<Entity>;
    findById(id: string | number, options?: FindOneOptions<Entity>): Promise<Entity | undefined>;
    insertAndReturn(entity: Entity, options?: SaveOptions): Promise<Entity>;
    insertMany(entities: Entity[], options?: SaveOptions): Promise<Entity[]>;
    updateAndReturn(entity: Entity, options?: SaveOptions): Promise<Entity>;
    updateMany(entities: Entity[]): Promise<Entity[]>;
    upsertAndReturn(entity: Entity, options?: SaveOptions): Promise<Entity>;
    upsertMany(entities: Entity[], options?: SaveOptions): Promise<Entity[]>;
  }
}
