import {Request, Response} from 'express';
import database from '../configs/postgresql';
import Line,{ LineMap } from '../configs/migrations/line.migrations';


export class LineController {

    //  CONTROLLER : Create line
    static async create(req : Request, res : Response) {
        try {
            let newLineAdd  = req.body;

            LineMap(database);
            const addLineResult = await Line.create(newLineAdd);
            res.status(200).send(addLineResult);
        } catch (error) {
            console.log(error);
            res.status(503).send("Create line end point invalid");
        }
    }

    //  CONTROLLER : List line
    static async list(req : Request, res : Response){
        try {
            res.status(200).send("Hello ; Line list end point");
        } catch (error) {
            console.log(error);
            res.status(503).send("List line end point invalid");
        }
    }

    //  CONTROLLER : Read line
    static async read(req : Request, res : Response){
        try {
            res.status(503).send("Hello ; Read list end point");
        } catch (error) {
            console.log(error);
            res.status(503).send("Read line end point invalid");
        }
    }

    // CONTROLLER : Update line
    static async update(req:Request, res:Response){
        try {
            res.status(200).send("Hello ; Update list end point");
        } catch (error) {
            console.log(error);
            res.status(503).send("Update line end point invalid");
        }
    }

        // CONTROLLER : Remove line
        static async remove(req:Request, res:Response){
            try {
                res.status(200).send("Hello ; Remove list end point");
            } catch (error) {
                console.log(error);
                res.status(503).send("Remove line end point invalid");
            }
        }

}