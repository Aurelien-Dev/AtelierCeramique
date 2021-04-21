import { Request, Response, NextFunction } from 'express';

export function index(req: Request, res: Response) {
    res.render('home/index'); 
}