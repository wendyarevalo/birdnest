module.exports = app => {
    const drones = require("../controllers/drone.controller")

    const router = require("express").Router();

    router.post("/drones/new", drones.create);

    router.get("/drones/getAll", drones.getAll);

    router.delete("/drones/:id", drones.delete);

    app.use('/', router);
}