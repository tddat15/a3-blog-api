import { Injectable } from '@nestjs/common';
import { EntityManager, EntityTarget, getConnection, getRepository, Repository } from 'typeorm';

@Injectable()
export class RepositoryFactory {
  public get<T>(entity: EntityTarget<T>, manager?: EntityManager): Repository<T> {
    return manager ? manager.getRepository(entity) : getRepository(entity);
  }

  public async transaction<T>(runInTransaction: (manager: EntityManager) => Promise<T>): Promise<T> {
    return getConnection().transaction(runInTransaction);
  }

  public async transaction1<T1, T>(e1: EntityTarget<T1>, runInTransaction: (repo1: Repository<T1>) => Promise<T>): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);

      return runInTransaction(t1);
    });
  }

  public async transaction2<T1, T2, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    runInTransaction: (repo1: Repository<T1>, repo2: Repository<T2>) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);

      return runInTransaction(t1, t2);
    });
  }

  public async transaction3<T1, T2, T3, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    runInTransaction: (repo1: Repository<T1>, repo2: Repository<T2>, repo3: Repository<T3>) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);

      return runInTransaction(t1, t2, t3);
    });
  }

  public async transaction4<T1, T2, T3, T4, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    runInTransaction: (repo1: Repository<T1>, repo2: Repository<T2>, repo3: Repository<T3>, repo4: Repository<T4>) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);

      return runInTransaction(t1, t2, t3, t4);
    });
  }

  public async transaction5<T1, T2, T3, T4, T5, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);

      return runInTransaction(t1, t2, t3, t4, t5);
    });
  }

  public async transaction6<T1, T2, T3, T4, T5, T6, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    e6: EntityTarget<T6>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
      repo6: Repository<T6>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);
      const t6 = this.get(e6, manager);

      return runInTransaction(t1, t2, t3, t4, t5, t6);
    });
  }

  public async transaction7<T1, T2, T3, T4, T5, T6, T7, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    e6: EntityTarget<T6>,
    e7: EntityTarget<T7>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
      repo6: Repository<T6>,
      repo7: Repository<T7>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);
      const t6 = this.get(e6, manager);
      const t7 = this.get(e7, manager);

      return runInTransaction(t1, t2, t3, t4, t5, t6, t7);
    });
  }

  public async transaction8<T1, T2, T3, T4, T5, T6, T7, T8, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    e6: EntityTarget<T6>,
    e7: EntityTarget<T7>,
    e8: EntityTarget<T8>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
      repo6: Repository<T6>,
      repo7: Repository<T7>,
      repo8: Repository<T8>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);
      const t6 = this.get(e6, manager);
      const t7 = this.get(e7, manager);
      const t8 = this.get(e8, manager);

      return runInTransaction(t1, t2, t3, t4, t5, t6, t7, t8);
    });
  }

  public async transaction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    e6: EntityTarget<T6>,
    e7: EntityTarget<T7>,
    e8: EntityTarget<T8>,
    e9: EntityTarget<T9>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
      repo6: Repository<T6>,
      repo7: Repository<T7>,
      repo8: Repository<T8>,
      repo9: Repository<T9>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);
      const t6 = this.get(e6, manager);
      const t7 = this.get(e7, manager);
      const t8 = this.get(e8, manager);
      const t9 = this.get(e9, manager);

      return runInTransaction(t1, t2, t3, t4, t5, t6, t7, t8, t9);
    });
  }

  public async transaction10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    e6: EntityTarget<T6>,
    e7: EntityTarget<T7>,
    e8: EntityTarget<T8>,
    e9: EntityTarget<T9>,
    e10: EntityTarget<T10>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
      repo6: Repository<T6>,
      repo7: Repository<T7>,
      repo8: Repository<T8>,
      repo9: Repository<T9>,
      repo10: Repository<T10>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);
      const t6 = this.get(e6, manager);
      const t7 = this.get(e7, manager);
      const t8 = this.get(e8, manager);
      const t9 = this.get(e9, manager);
      const t10 = this.get(e10, manager);

      return runInTransaction(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10);
    });
  }

  public async transaction11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    e6: EntityTarget<T6>,
    e7: EntityTarget<T7>,
    e8: EntityTarget<T8>,
    e9: EntityTarget<T9>,
    e10: EntityTarget<T10>,
    e11: EntityTarget<T11>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
      repo6: Repository<T6>,
      repo7: Repository<T7>,
      repo8: Repository<T8>,
      repo9: Repository<T9>,
      repo10: Repository<T10>,
      repo11: Repository<T11>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);
      const t6 = this.get(e6, manager);
      const t7 = this.get(e7, manager);
      const t8 = this.get(e8, manager);
      const t9 = this.get(e9, manager);
      const t10 = this.get(e10, manager);
      const t11 = this.get(e11, manager);

      return runInTransaction(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11);
    });
  }

  public async transaction12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T>(
    e1: EntityTarget<T1>,
    e2: EntityTarget<T2>,
    e3: EntityTarget<T3>,
    e4: EntityTarget<T4>,
    e5: EntityTarget<T5>,
    e6: EntityTarget<T6>,
    e7: EntityTarget<T7>,
    e8: EntityTarget<T8>,
    e9: EntityTarget<T9>,
    e10: EntityTarget<T10>,
    e11: EntityTarget<T11>,
    e12: EntityTarget<T12>,
    runInTransaction: (
      repo1: Repository<T1>,
      repo2: Repository<T2>,
      repo3: Repository<T3>,
      repo4: Repository<T4>,
      repo5: Repository<T5>,
      repo6: Repository<T6>,
      repo7: Repository<T7>,
      repo8: Repository<T8>,
      repo9: Repository<T9>,
      repo10: Repository<T10>,
      repo11: Repository<T11>,
      repo12: Repository<T12>,
    ) => Promise<T>,
  ): Promise<T> {
    return getConnection().transaction(async (manager: EntityManager) => {
      const t1 = this.get(e1, manager);
      const t2 = this.get(e2, manager);
      const t3 = this.get(e3, manager);
      const t4 = this.get(e4, manager);
      const t5 = this.get(e5, manager);
      const t6 = this.get(e6, manager);
      const t7 = this.get(e7, manager);
      const t8 = this.get(e8, manager);
      const t9 = this.get(e9, manager);
      const t10 = this.get(e10, manager);
      const t11 = this.get(e11, manager);
      const t12 = this.get(e12, manager);

      return runInTransaction(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12);
    });
  }
}
