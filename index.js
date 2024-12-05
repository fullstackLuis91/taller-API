const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/keys");
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const { dbConnection } = require("./config/config")
app.use(express.json())

dbConnection()
// // app.use("/tasks", require("./routes/tasks"));  

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs));

app.listen(PORT, () => console.log("Servidor levantado en el puerto" + 8080));
