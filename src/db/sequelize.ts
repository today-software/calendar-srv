import { Sequelize } from 'sequelize';
import EnvVars from '@src/constants/EnvVars';

const sequelize = new Sequelize(
  EnvVars.DataBase.Name.toString(), 
  EnvVars.DataBase.User.toString(), 
  EnvVars.DataBase.Password.toString(),  
  {
    host: EnvVars.DataBase.Host.toString(),
    dialect: 'mariadb',
  });

export {sequelize};