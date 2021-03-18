import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Guid } from "guid-typescript";

@Entity()
export class Tree {
  @PrimaryKey()
  id!: Number;

  @Property({ type: "text" })
  guid: Guid = Guid.create();

  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  name!: string;

  @Property()
  position!: string;

  @Property()
  pattern!: string;

  @Property({ type: "text" })
  branchs!: string;

  @Property({ type: "text" })
  colors!: string;

  @Property({ type: "text" })
  songs!: string;

}