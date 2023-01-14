module.exports = app => {
    const pilots = require("../controllers/pilot.controller")

    const router = require("express").Router();

    router.post("/pilots/new", pilots.create);

    router.get("/pilots/getAll", pilots.getAll);

    router.delete("/pilots/:id", pilots.delete);

    app.use('/', router);
}