import { Migration } from '@mikro-orm/migrations';

export class Migration20210318141840 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "garden" ("_id" serial primary key, "guid" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "meta" varchar(255) not null, "plants" text not null, "user" text not null);');

    this.addSql('create table "user" ("id" serial primary key, "guid" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "password" varchar(255) not null, "rooms" text not null, "songs" text not null);');

    this.addSql('create table "tree" ("id" serial primary key, "guid" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "position" varchar(255) not null, "pattern" varchar(255) not null, "branchs" text not null, "colors" text not null, "songs" text not null);');
  }

}
