import { Request, Response, NextFunction } from 'express';
import async from 'async'
import ShopifyUtils from '../services/shopify/shopifyService';
import client from '../services/shopify/shopifyClient'



export async function initShopify(req: Request, res: Response, next: NextFunction) {
    next()
}

export function index(req: Request, res: Response, next: NextFunction) {
    res.render('home/index', {
    
    });
}

export function pos(req: Request, res: Response, next: NextFunction) {
    res.render('home/pos', {
    
    });
}