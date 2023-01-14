const axios = require("axios");
const {calculateDistance} = require("./calculateDistance");
const dbPilot = require("../controllers/pilot.controller");

exports.updateTrespasserPilots = async (drones, lastSeen) => {
    drones = drones.filter(drone => calculateDistance(drone.positionX._text, drone.positionY._text) < 100)
    drones.map(async drone => {
        axios.get(process.env.BASE_URL + "pilots/" + drone.serialNumber._text)
            .then(async response => {
                const pilot = response.data
                pilot.lastSeen = lastSeen
                const distance = calculateDistance(drone.positionX._text, drone.positionY._text)
                const foundPilot = await dbPilot.findPilot(pilot)
                if (foundPilot) {
                    pilot.closestDistance = foundPilot.closestDistance <= distance ? foundPilot.closestDistance : distance
                    await dbPilot.updateDistance(pilot)
                } else {
                    pilot.closestDistance = distance
                    await dbPilot.savePilot(pilot)
                }
            }
        )
    })
}
