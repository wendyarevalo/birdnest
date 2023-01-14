const db = require("../models");
const Drone = db.drones;

exports.create = (req, res) => {
    if(!req.body.serialNumber){
        res.status(400)
            .send({ message: "Empty content."})
        return;
    }

    const drone= new Drone({
        serialNumber: req.body.serialNumber,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        mac: req.body.mac,
        ipv4: req.body.ipv4,
        ipv6: req.body.ipv6,
        firmware: req.body.firmware,
        positionX: req.body.positionX,
        positionY: req.body.positionY,
        altitude: req.body.altitude
    })

    drone.save(drone)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500)
                .send({message: error.message || "Error occurred when creating the Drone"})
        })
}

exports.getAll = (req, res) => {
    Drone.find({})
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500)
                .send({message: error.message || "Error occurred while retrieving Drones"})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Drone.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Drone with id=${id}.`
                });
            } else {
                res.send({
                    message: "Drone was deleted successfully!"
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: "Could not delete Drone with id=" + id
            });
        });
};

