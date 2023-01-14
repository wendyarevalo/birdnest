module.exports = app => {
    const pilots = require("../controllers/pilot.controller")

    const router = require("express").Router();

    router.get("/pilots/getAll", pilots.getAll);

    app.use('/', router);
}