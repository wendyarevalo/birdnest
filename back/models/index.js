const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.pilots = require("./pilot.model.js")(mongoose);
db.drones = require("./drone.model.js")(mongoose);

module.exports = db;