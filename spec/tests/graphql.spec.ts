/* eslint-disable @typescript-eslint/no-explicit-any */
import supertest, { SuperTest, Response } from 'supertest';

import app from '@src/server';

import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import Paths from 'spec/support/Paths';

// **** Variables **** //

// StatusCodes
const { OK } = HttpStatusCodes;

// Define GraphQL query
const GET_EVENTS_QUERY = `
  query {
    events {
      eventId
      title
      body
    }
  }
`;

// **** Tests **** //

describe('GraphQLRouter', () => {

  let agent: SuperTest<any>;

  // Run before all tests
  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  // ** Get hello world ** //
  describe(`"POST:${Paths.Graphql}"`, () => {

    const callApi = (postData?: any) => {
      let request = agent.post(Paths.Graphql); // Assuming you want to perform a POST request
    
      if (postData) {
        request = request.send(postData);
      }
    
      return request;
    };
    // Success
    it('should return a list of events', (done) => {
      // Call API
      callApi({ query: GET_EVENTS_QUERY })
        .end((_: Error, res: Response) => {
          
          expect(res.status).toBe(OK);
          // Execute the GraphQL query against the schema
          const { events } = res.body.data;
          // Ensure data.events is an array
          expect(events).toBeInstanceOf(Array);
          done();
      });
    });
  });
});