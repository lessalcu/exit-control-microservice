const requests = require('requests');
require('dotenv').config();

const PARKING_LOT_SERVICE_URL = process.env.PARKING_LOT_SERVICE_URL;

const updateParkingCapacity = async (parkingLotId) => {
    const url = `${PARKING_LOT_SERVICE_URL}/${parkingLotId}`;

    let responseData = '';

    return new Promise((resolve, reject) => {
        requests(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        })
            .on('data', (chunk) => {
                responseData += chunk;
            })
            .on('end', () => {
                console.log("✅ Parking lot capacity increased:", responseData);
                resolve();
            })
            .on('error', (error) => {
                console.error("❌ Error increasing parking lot capacity:", error);
                reject(error);
            });
    });
};

module.exports = { updateParkingCapacity };