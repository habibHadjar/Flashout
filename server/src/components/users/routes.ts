import { Router } from 'express';
import { signup } from './controllers'; // Assurez-vous d'importer correctement vos contrôleurs

const UserRouter = Router();

UserRouter.post('/test', signup);

// UserRouter.post('/', controller.createUser);

export default UserRouter;
