import { Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
import contactDB from '../db/contactDB';



export function getContactMessage(req: Request, res: Response, next: NextFunction) {
    var contact = new contactDB();

    contact.getContactMessage((result) => {
        res.status(200).json({ result: result });
    });
}

export function addContactMessage(req: Request, res: Response, next: NextFunction) {
    var contact = new contactDB();

    contact.addContactMessage(req.body, (result) => {
        res.status(200).json({ result: result });
    });
}