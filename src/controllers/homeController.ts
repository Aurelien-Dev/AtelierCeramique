import { Request, Response, NextFunction } from 'express';

export function index(req: Request, res: Response, next: NextFunction) {
    res.render('home/index');
}

export function pos(req: Request, res: Response, next: NextFunction) {
    res.render('home/pos');
}