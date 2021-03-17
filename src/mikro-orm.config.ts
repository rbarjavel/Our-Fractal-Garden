import { __prod__ } from "./constante";
import { Tree } from "./entities/tree";
import { MikroORM } from "@mikro-orm/core";
import path from 'path'
import { Garden } from "./entities/garden";
import { User } from "./entities/user";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[jt]s$/,
  },
  entities: [Tree, User, Garden],
  dbName: "ofg-db",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
