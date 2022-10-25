import _ from 'lodash';
import type { FindManyOptions, FindOneOptions, SaveOptions } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';

class Entity extends BaseEntity {
  public id?: string | number | undefined;
}

Repository.prototype.findAll = async function (options?: FindManyOptions<Entity>): Promise<Entity[]> {
  return this.find(options);
};

Repository.prototype.findAllAndCount = async function (options?: FindManyOptions<Entity>): Promise<[Entity[], number]> {
  return this.findAndCount(options);
};

Repository.prototype.findByIdOrFail = async function (id: string | number, options?: FindOneOptions<Entity>): Promise<Entity> {
  let saveOptions: FindOneOptions<Entity> = <FindOneOptions<Entity>>options;
  if (saveOptions) {
    _.set(saveOptions, 'where.id', id);
  } else {
    saveOptions = { where: { id } };
  }

  return this.findOneOrFail(saveOptions);
};

Repository.prototype.findById = async function (id: string | number, options?: FindOneOptions<Entity>): Promise<Entity | undefined> {
  let saveOptions: FindOneOptions<Entity> = <FindOneOptions<Entity>>options;
  if (saveOptions) {
    _.set(saveOptions, 'where.id', id);
  } else {
    saveOptions = { where: { id } };
  }

  return this.findOne(saveOptions);
};

Repository.prototype.insertAndReturn = async function (entity: Entity, options?: SaveOptions): Promise<Entity> {
  let saveOptions = options;

  if (!saveOptions) {
    saveOptions = { reload: true };
  } else if (saveOptions.reload === undefined) {
    saveOptions.reload = false;
  }

  const data = await this.save(entity, saveOptions);

  return <Promise<Entity>>data;
};

Repository.prototype.insertMany = async function (entities: Entity[], options?: SaveOptions): Promise<Entity[]> {
  let saveOptions = options;

  if (!saveOptions) {
    saveOptions = { reload: false };
  } else if (saveOptions.reload === undefined) {
    saveOptions.reload = false;
  }

  return this.save(entities, saveOptions);
};

Repository.prototype.updateAndReturn = async function (entity: Entity, options?: SaveOptions): Promise<Entity> {
  let saveOptions = options;

  if (!saveOptions) {
    saveOptions = { reload: true };
  } else if (saveOptions.reload === undefined) {
    saveOptions.reload = false;
  }
  return this.save(entity, saveOptions);
};

Repository.prototype.updateMany = async function (entities: Entity[]): Promise<Entity[]> {
  return this.save(entities, <SaveOptions>{ reload: false });
};

Repository.prototype.upsertAndReturn = async function (entity: Entity, options?: SaveOptions): Promise<Entity> {
  const { id } = entity;

  if (id) {
    return this.updateAndReturn(entity, options);
  }

  return this.insertAndReturn(entity, options);
};

Repository.prototype.updateMany = async function (entities: Entity[], options?: SaveOptions): Promise<Entity[]> {
  return this.save(entities, options);
};

export {};
