import { __prod__ } from "./constante";
import { Tree } from "./entities/tree";
import { MikroORM } from "@mikro-orm/core";
import path from 'path'

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[jt]s$/,
  },
  entities: [Tree],
  dbName: "ofg-db",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
