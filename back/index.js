require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db.connection")
const server = require("./server");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());

db.dbConnect()

require("./routes/pilot.routes")(app);

setInterval(server.requestNewTrespasserPilots, 2000)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})