/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { EventRecord } from '../db/models/eventModel';

const eventResolver = {
  Query: {
    events: async () => {
      return await EventRecord.findAll();
    },
    getEvent: async (_: any, { id }: any) => {
      return await EventRecord.findByPk(id);
    },
  },
  Mutation: {
    createEvent: async (_: any, { input }: { input: any }) => {
      const event = await EventRecord.create(input);
      return event;
    },
    updateEvent: async (_: any, { eventId, input }: 
      { eventId:number, input: any }) => {
      const { 
        calendarId, 
        isAllDay,
        recurrenceRule,
        createdBy,
        title, 
        body,
        startTime,
        endTime,
        visibility,
        metaInfo,
      } = input;

      const event = await EventRecord.findByPk(eventId);
      if (!event) {
        throw new Error('Event not found');
      }
      if (calendarId !== undefined) {
        event.calendarId = calendarId;
      }
      if (isAllDay !== undefined) {
        event.calendarId = isAllDay;
      }
      if (recurrenceRule !== undefined) {
        event.calendarId = recurrenceRule;
      }
      if (createdBy !== undefined) {
        event.createdBy = createdBy;
      }
      if (title !== undefined) {
        event.title = title;
      }
      if (body !== undefined) {
        event.title = body;
      }
      if (startTime !== undefined) {
        event.title = startTime;
      }
      if (endTime !== undefined) {
        event.title = endTime;
      }
      if (visibility !== undefined) {
        event.title = visibility;
      }
      if (metaInfo !== undefined) {
        event.title = metaInfo;
      }
      await event.save();
      return event;
    },
  },
};

export { eventResolver };
