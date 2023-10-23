import { Router } from 'express';
// import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import BaseRoutes from './BaseRoutes';

// **** Variables **** //

const apiRouter = Router();
// validate = jetValidator();


// ** Add UserRouter ** //

// Get hello world
apiRouter.get('/', BaseRoutes.helloWorld);

// Add UserRouter
apiRouter.use(Paths.Base, apiRouter);

// **** Export default **** //

export default apiRouter;
