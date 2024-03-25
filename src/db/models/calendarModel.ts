import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

interface CalendarRecordAttributes {
  calendarId: number;
  calendarName: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
}

class CalendarRecord 
  extends Model<CalendarRecordAttributes> 
  implements CalendarRecordAttributes {
  public calendarId!: number;
  public calendarName!: string;
  public createdBy!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public ownerId!: number;
}

CalendarRecord.init({
  calendarId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Assuming it's auto-incrementing
  },
  calendarName: {
    type: DataTypes.STRING,
    allowNull: false,
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
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, 
{
  sequelize,
  modelName: 'CalendarRecord',
  tableName: 'calendar_records',
});

export { CalendarRecord };