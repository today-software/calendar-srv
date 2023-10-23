import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Hello World
 */
function helloWorld(_: IReq, res: IRes) {
  return res.status(HttpStatusCodes.OK).json({ message: 'Hello World' });
}

// **** Export default **** //

export default {
  helloWorld,
} as const;
