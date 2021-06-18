import { Request, Response, Router } from 'express';
import * as homeController from '../controllers/homeController';
import * as contactController from '../controllersApi/contactController';

// Create a new router to handle /movies routes
const homeRouter = Router();

homeRouter.get('/', homeController.index)
homeRouter.get('/point-de-vente', homeController.pos)
homeRouter.get('/cgv', homeController.cgv)
homeRouter.get('/tracabilite', homeController.tracabilite)

homeRouter.get('/api/contact', contactController.getContactMessage)
homeRouter.post('/api/contact/envoyermessage', contactController.addContactMessage)


export default homeRouter;