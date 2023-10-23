import supertest, { SuperTest, Test, Response } from 'supertest';

import app from '@src/server';

import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import Paths from 'spec/support/Paths';


// **** Variables **** //

// StatusCodes
const { OK } = HttpStatusCodes;


// **** Tests **** //

describe('BasicRouter', () => {

  let agent: SuperTest<Test>;

  // Run before all tests
  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  // ** Get hello world ** //
  describe(`"GET:${Paths.Base}"`, () => {

    const callApi = () => agent.get(Paths.Base);

    // Success
    it('should return \'hello world\'.', (done) => {
      // Call API
      callApi()
        .end((_: Error, res: Response) => {
          expect(res.status).toBe(OK);
          expect(res.body.message).toBe('Hello World');
          done();
        });
    });
  });
});
