import express from "express";

export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    //add user TODO
    public addUser(){

    }


    //delete user by id TODO 
    public deleteUser(){

    }

    //update user by id TODO
    public updateUser(){
        
    }

    //get user info by id TODO
    public getUser(){
        
    }



}
