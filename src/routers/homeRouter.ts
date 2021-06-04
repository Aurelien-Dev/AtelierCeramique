import { Request, Response, Router } from 'express';
import * as homeController from '../controllers/homeController';

// Create a new router to handle /movies routes
const homeRouter = Router();

homeRouter.get('/', homeController.index)
homeRouter.get('/point-de-vente', homeController.pos)
homeRouter.get('/cgv', homeController.cgv)


export default homeRouter;