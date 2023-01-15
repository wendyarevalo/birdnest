module.exports = app => {
    const pilots = require("../controllers/pilot.controller")

    const router = require("express").Router();

    router.get("/pilots", pilots.getAll);

    app.use('/', router);
}