import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constante";
import { Tree } from "./entities/tree";
import mikroConfig from "./mikro-orm.config"
import { startApi } from "./api";

// TO ADD IN DB
// const data = orm.em.create(Tree, {
//     name: "test",
//     branchs: "[{}]",
//     songs: "{[]}",
// })
// await orm.em.persistAndFlush(data)



const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();
    const data = await orm.em.find(Tree, {});
    console.log(data);
    startApi(8888);
}

main().catch((error) => {
    console.error(error);
})
