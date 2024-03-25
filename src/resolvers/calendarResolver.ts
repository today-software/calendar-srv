/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarRecord } from '../db/models/calendarModel';

const calendarResolver = {
  Query: {
    calendars: async () => {
      return await CalendarRecord.findAll();
    },
    getCalendar: async (_: any, { id }: any) => {
      return await CalendarRecord.findByPk(id);
    },
  },
  Mutation: {
    createCalendar: async (_: any, { input }: { input: any }) => {
      const calendar = await CalendarRecord.create(input);
      return calendar;
    },
    updateCalendar: async (_: any, { calendarId, input }: 
      { calendarId:number, input: any }) => {
      const { calendarName, createdBy,ownerId } = input;
      const calendar = await CalendarRecord.findByPk(calendarId);
      if (!calendar) {
        throw new Error('Calendar not found');
      }
      if (calendarName !== undefined) {
        calendar.calendarName = calendarName;
      }
      if (createdBy !== undefined) {
        calendar.createdBy = createdBy;
      }
      if (ownerId !== undefined) {
        calendar.ownerId = ownerId;
      }
      await calendar.save();
      return calendar;
    },
  },
};

export { calendarResolver };
