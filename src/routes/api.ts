import { Router } from 'express';
// import jetValidator from 'jet-validator';
import Paths from '../constants/Paths';
import GraphqlRoute from './GraphqlRoute';

// **** Variables **** //

const apiRouter = Router();
// validate = jetValidator();

// ** Add GraphQL Router ** //
apiRouter.use(
  Paths.Graphql, GraphqlRoute.graphql());

// Add base path
apiRouter.use(Paths.Base, apiRouter);

// **** Export default **** //

export default apiRouter;
