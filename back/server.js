const express = require("express");
const cors = require("cors");
const db = require("./config/db.connection")

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

db.dbConnect()

app.use(express.json());

require("./routes/pilot.routes")(app);
require("./routes/drone.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});