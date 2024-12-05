const mongoose = require("mongoose");

// c/* onst { MONGO_URI } = require("./keys");//comentar para desplegar */

require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada con éxito");
  } catch (error) {
    console.error(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

module.exports = {
  dbConnection,
};