const db = require('../config/db');

const getEntryByVehicleId = async (vehicleId) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM Entries WHERE vehicle_id = ? AND status = "Entered" LIMIT 1',
            [vehicleId]
        );
        return rows.length ? rows[0] : null;
    } catch (error) {
        console.error("❌ Database error while checking entry:", error);
        throw error;
    }
};

const updateEntryStatus = async (entryId) => {
    try {
        await db.execute(
            'UPDATE Entries SET status = "Exited" WHERE id = ?',
            [entryId]
        );
    } catch (error) {
        console.error("❌ Database error while updating entry status:", error);
        throw error;
    }
};

module.exports = { getEntryByVehicleId, updateEntryStatus };
