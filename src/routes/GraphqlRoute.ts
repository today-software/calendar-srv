import { graphqlHTTP } from 'express-graphql';
import { eventSchema } from '@src/graphql/schemas/eventSchema';
import { calendarSchema } from '@src/graphql/schemas/calendarSchema';
import { eventResolver } from '../resolvers/eventResolver';
import { calendarResolver } from '../resolvers/calendarResolver';
import { makeExecutableSchema } from '@graphql-tools/schema'

// Create executable schema using makeExecutableSchema
const schema = makeExecutableSchema({
  typeDefs: [eventSchema, calendarSchema],
  resolvers: [eventResolver, calendarResolver],
});

// **** Functions **** //

/**
 * Hello World
 */
function graphql() {
  return  graphqlHTTP({
    schema,
    graphiql: true,
  });
} 
// **** Export default **** //

export default {
  graphql,
} as const;
