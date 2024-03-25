import { buildSchema } from 'graphql';

const eventSchemaSDL = (`
  input EventInput {
    calendarId: Int
    isAllDay: String
    recurrenceRule: String
    createdBy: String
    title: String
    body: String
    startTime: String
    endTime: String
    visibility: String
    metaInfo: String
  }

  type EventRecord {
    eventId: Int!
    calendarId: Int!
    createdBy: String
    createdAt: String
    updatedAt: String
    isAllDay: String
    recurrenceRule: String
    title: String
    body: String
    startTime: String
    endTime: String
    visibility: String
    metaInfo: String
  }

  type Query {
    events: [EventRecord]
    getEvent(eventId: Int!): EventRecord
  }

  type Mutation {
    createEvent(input: EventInput): EventRecord
    updateEvent(eventId: Int!, input: EventInput!): EventRecord
  }
`);

const eventSchema = buildSchema(eventSchemaSDL);

export { eventSchema };