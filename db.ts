import { Sequelize } from 'sequelize';
// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.MYSQL_DB}`, {
    dialect: 'mysql'
});

import mongoose from 'mongoose';

const userdb = process.env.DB_USER_MONGO;
const passdb = process.env.DB_PASS_MONGO;


mongoose.connect(`mongodb+srv://${userdb}:${passdb}@cluster0.2b2boyf.mongodb.net/DB_carros?retryWrites=true&w=majority`)
.then(() => {
    console.log(`Conectou ao banco`);
  })
  .catch((err) => console.log(err));
export const db = mongoose.connection;


export default sequelize;


