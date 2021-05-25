import { Request, Response, NextFunction } from 'express';
import async from 'async'
import ShopifyUtils from '../services/shopify/shopifyService';
import client from '../services/shopify/shopifyClient'



export async function initShopify(req: Request, res: Response, next: NextFunction) {
    next()
}

export function index(req: Request, res: Response, next: NextFunction) {
    // const productsPromise = client.product.fetchAll();
    // const collectionsPromise = client.collection.fetchAll();

    // Promise.all([productsPromise, collectionsPromise]).then(([products, collections]) => {
    // })
    res.render('home/index', {
    
    });


    // async.waterfall([
    //     async (callback) => {

    //         callback(null, products);
    //     }], (err, products) => {
    //         res.render('home/index', {
    //             products: products
    //         });
    //     });
}