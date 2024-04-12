import { Request, Response } from "express";
import database from '../configs/postgresql';
// import User from "../models/user.models";
import User,{ UserMap } from "../configs/migrations/user.migrations";

export class UserController {

    //  CONTROLLER : Create user
    static async create(req : Request, res : Response) {
        try {
            let newUserAdd : Partial<User> = req.body as User;
            UserMap(database)
            // const addUserResult = await User.create(newUserAdd);
            res.status(200).send(addUserResult);
        } catch (error) {
            console.log(error);
            res.status(503).send("Create user end point invalid");
        }
    }

    //  CONTROLLER : List user
    static async list(req : Request, res : Response) {
        try {
            res.status(200).send("Hello ; User list end point");
        } catch (error) {
            console.log(error);
            res.status(503).send("List user end point invalid");
        }
    }

    //  CONTROLLER : Read user
    static async read(req : Request, res : Response) {
        try {
            res.status(200).send("Hello ; User read end point");
        } catch (error) {
            console.log(error);
            res.status(503).send("Read user end point invalid");
        }
    }

    //  CONTROLLER : Update user
    static async update(req : Request, res : Response) {
        try {
            res.status(200).send("Hello ; User update end point");
        } catch (error) {
            console.log(error);
            res.status(503).send("Update user end point invalid");
        }
    }
    
    //  CONTROLLER : Remove user
    static async remove(req : Request, res : Response) {
        try {
            res.status(200).send("Hello ; User remove end point");
        } catch (error) {
            console.log(error);
            res.status(503).send("Remove user end point invalid");
        }
    }

}