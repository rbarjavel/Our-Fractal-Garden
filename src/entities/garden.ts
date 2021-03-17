import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Garden {

  @PrimaryKey()
  _id!: number;

  @Property({type: 'date'})
  createdAt: Date = new Date();

  @Property({type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  name!: string;

  @Property()
  meta!: string;

  @Property({type: 'text'})
  plants!: string;

  @Property({type: 'text'})
  user!: string;
}