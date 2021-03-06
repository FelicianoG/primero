// Mongo DB
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.empleados = require("./empleado.model.js")(mongoose);
db.direcciones = require("./direccion.model.js")(mongoose);
db.productos = require("./producto.model.js")(mongoose);

module.exports = db;
