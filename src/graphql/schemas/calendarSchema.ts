import { buildSchema } from 'graphql';

const calendarSchemaSDL = (`
  input CalendarInput {
    calendarName: String
    createdBy: String
    ownerId: Int!
  }

  type CalendarRecord {
    calendarId: Int!
    calendarName: String
    createdBy: String
    createdAt: String
    updatedAt: String
    ownerId: Int!
  }

  type Query {
    calendars: [CalendarRecord]
    getCalendar(calendarId: Int!): CalendarRecord
  }

  type Mutation {
    createCalendar(input: CalendarInput!): CalendarRecord
    updateCalendar(calendarId: Int!, input: CalendarInput!): CalendarRecord
  }
`);

const calendarSchema = buildSchema(calendarSchemaSDL);

export { calendarSchema };