const db = require("../models");
const Pilot = db.pilots;

exports.create = (req, res) => {
    if(!req.body.pilotId){
        res.status(400)
            .send({ message: "Empty content."})
        return;
    }

    const pilot = new Pilot({
        pilotId: req.body.pilotId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        createdDt: req.body.createdDt
    })

    pilot.save(pilot)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500)
                .send({message: error.message || "Error occurred when creating the Pilot"})
        })
}

exports.getAll = (req, res) => {
    Pilot.find({})
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500)
                .send({message: error.message || "Error occurred while retrieving Pilots"})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Pilot.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Pilot with id=${id}.`
                });
            } else {
                res.send({
                    message: "Pilot was deleted successfully!"
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: "Could not delete Pilot with id=" + id
            });
        });
};

