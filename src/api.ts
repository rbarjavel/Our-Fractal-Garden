import express from "express";
import { Request, Response } from "express";
import { MikroORM, IDatabaseDriver, Connection } from "mikro-orm";
import { Tree } from "./entities/tree";

// TO ADD IN DB
// const data = orm.em.create(Tree, {
//     name: "test",
//     branchs: "[{}]",
//     songs: "{[]}",
// })
// await orm.em.persistAndFlush(data)

export const startApi = (port: number, orm: MikroORM<IDatabaseDriver<Connection>>) => {
    const app = express();
    app.use(express.json());

    app.post('/AddTree', async (req: Request, rep: Response) => {
        console.log('POST on /AddTree');
        console.log(req.body);
        
        const data = orm.em.create(Tree, {
            name: req.body.name,
            pattern: JSON.stringify(req.body.pattern),
            position: JSON.stringify(req.body.position),
            branchs: `[{"0": "${req.body.pattern.key}", "x": "${req.body.position.x}", "y": 0]`,
            songs: JSON.stringify(req.body.songs),
            colors: JSON.stringify(req.body.colors)
        });

        await orm.em.persistAndFlush(data).then(() => {
            rep.send('Ok');
        }).catch((error) => {
            rep.send(error);
        });
    });

    app.listen(port, () => {
        console.log(`listening on localhost:${8888}`);
    });
}
