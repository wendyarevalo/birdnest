exports.calculateDistance = (posX, posY) => {
    return Math.round(Math.sqrt(Math.pow(250000 - posX, 2) + Math.pow(250000 - posY, 2)))/1000
};