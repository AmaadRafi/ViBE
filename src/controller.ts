import express from "express";

export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    //add user TODO

    //delete user by id TODO 

    //user info by id TODO
}
