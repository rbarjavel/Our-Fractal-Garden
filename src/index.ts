import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constante";
import { Tree } from "./entities/tree";
import mikroConfig from "./mikro-orm.config"

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);

    const data = orm.em.create(Tree, {
        name: "test",
        branchs: "[{}]",
        songs: "{[]}",
    })
    await orm.em.persistAndFlush(data)
    console.log("hello world")
}

main();