const db = require("../models");
const Pilot = db.pilots;

exports.savePilot = (pilot) => {
        new Pilot(pilot).save(pilot)
        .then((data) => {
            console.log("Successfully created pilot with id", data.id)
        })
        .catch(error => {
            console.log("Error occurred when creating pilot", error)
        })
}

exports.findPilot = async (pilot) => await Pilot.findOne({pilotId: pilot.pilotId})

exports.updateDistance = (pilot) =>
    Pilot.findOneAndUpdate(
        {pilotId: pilot.pilotId},
        {closestDistance: pilot.closestDistance, lastSeen: pilot.lastSeen}
    ).then( (data) => {
        console.log("Successfully updated pilot with id", data.id)
    })

exports.getAll = (req, res) => {
    Pilot.find({})
        .then(data => {
            res.send(data.reverse())
        })
        .catch(error => {
            res.status(500)
                .send({message: error.message || "Error occurred while retrieving Pilots"})
        })
}
