import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/UserModel';
import Student from '../models/StudentModel';
import Photo from '../models/PhotoModel';

const models = [User, Student, Photo];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(
  connection.models,
));
