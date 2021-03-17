import express from "express";
import { Request, Response } from "express";

export const startApi = (port: number) => {
    const app = express();

    app.get('/Tree', (req: Request, rep: Response) => {
        console.log(req.headers);
        rep.send('hello world');
    });

    app.listen(port, () => {
        console.log(`listening on localhost:${8888}`);
    });
}
