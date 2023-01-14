const axios = require("axios");
const {xml2json} = require("xml-js");
const {updateTrespasserPilots} = require("./utils/updateTrespasserPilots");

exports.requestNewTrespasserPilots = () => {
        axios.get(process.env.BASE_URL + "drones").then(async response => {
                const dronesData = xml2json(response.data, {compact: true})
                const lastSeen = JSON.parse(dronesData).report.capture._attributes.snapshotTimestamp
                const drones = JSON.parse(dronesData).report.capture.drone
                await updateTrespasserPilots(drones, lastSeen)
            }
        )
}
