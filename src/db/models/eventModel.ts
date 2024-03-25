import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';
import { CalendarRecord } from '../models/calendarModel';

type Visibility = 'public' | 'private' | 'confidential';

interface EventRecordAttributes {
  eventId: number;
  calendarId: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  isAllDay: boolean;
  recurrenceRule?: string;
  title: string;
  body?: string;
  startTime: Date;
  endTime: Date;
  visibility: Visibility;
  metaInfo?: string;
}

class EventRecord 
  extends Model<EventRecordAttributes> 
  implements EventRecordAttributes {
  public eventId!: number;
  public calendarId!: number;
  public createdBy!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public isAllDay!: boolean;
  public recurrenceRule?: string;
  public title!: string;
  public body?: string;
  public startTime!: Date;
  public endTime!: Date;
  public visibility!: Visibility;
  public metaInfo?: string;
}

EventRecord.init({
  eventId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Assuming it's auto-incrementing
  },
  calendarId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CalendarRecord,
      key: 'calendarId',
    },
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  isAllDay: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  recurrenceRule: {
    type: DataTypes.TEXT,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  visibility: {
    type: DataTypes.ENUM('public', 'private', 'confidential'),
    allowNull: false,
  },
  metaInfo: {
    type: DataTypes.TEXT,
  },
}, 
{
  sequelize,
  modelName: 'EventRecord',
  tableName: 'event_records',
});

export { EventRecord };