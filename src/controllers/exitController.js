const { getEntryByVehicleId, updateEntryStatus } = require('../services/entryLogService');
const { updateParkingCapacity } = require('../services/parkingLotService');

const registerExit = async (req, res) => {
    const { vehicleId } = req.body;

    try {
        const entry = await getEntryByVehicleId(vehicleId);
        if (!entry) {
            return res.status(404).json({ message: 'No active entry found for this vehicle' });
        }

        if (entry.status === 'Exited') {
            return res.status(400).json({ message: 'Vehicle has already exited' });
        }

        const exitTime = new Date();

        await updateEntryStatus(entry.id);
        await updateParkingCapacity(entry.parking_lot_id);

        return res.status(200).json({ message: 'Exit registered successfully', exitId: entry.id, exitTime });
    } catch (error) {
        return res.status(500).json({ message: 'Error processing exit', error });
    }
};

module.exports = { registerExit };
