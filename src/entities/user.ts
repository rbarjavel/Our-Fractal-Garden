import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {

  @PrimaryKey()
  _id!: number;

  @Property({type: 'date'})
  createdAt: Date = new Date();

  @Property({type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  name!: string;

  @Property()
  password!: string;

  @Property({type: 'text'})
  rooms!: string;

  @Property({type: 'text'})
  songs!: string;
}
