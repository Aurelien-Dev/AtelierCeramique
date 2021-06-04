import { Request, Response, Router } from 'express';
import * as homeController from '../controllers/homeController';

// Create a new router to handle /movies routes
const homeRouter = Router();

homeRouter.use(homeController.initShopify)
homeRouter.get('/', homeController.index)
homeRouter.get('/point-de-vente', homeController.pos)


export default homeRouter;