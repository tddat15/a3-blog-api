import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum KeyItemCode {
  LAB_TEST_UNIT_PRICE = 'LAB_TEST_UNIT_PRICE',
  IMPORT_FLIGHT_TEMPLATE_URL = 'IMPORT_FLIGHT_TEMPLATE_URL',
}

export enum KeyItemGroup {
  PAYMENT = 'PAYMENT',
  TEMPLATE = 'TEMPLATE',
}

@Entity('key_item')
export class KeyItem extends BaseEntity {
  @Column('character varying', { primary: true, name: 'key_group', length: 25 })
  keyGroup: string;

  @Column('character varying', { primary: true, name: 'key_code', length: 100 })
  keyCode: string;

  @Column('character varying', { name: 'key_value', length: 255 })
  keyValue: string;

  @Column('character varying', { name: 'comment', length: 255 })
  comment: string;

  public constructor(props?: Partial<KeyItem>) {
    super();
    if (props) this.update(props);
  }

  private update(props: Partial<KeyItem>): KeyItem {
    return Object.assign(this, props);
  }
}
