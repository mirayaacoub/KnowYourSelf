const { Schedule } = require('../models/schedule.model');

/**
 * Creates schedule for therapists. 
 * @param {*} data 
 * @returns 
 */
const createSchedule = async (data) => {
    const { date_time, therapist_id } = data;
    try {
        const schedule = await Schedule.create({ date_time: date_time, therapist_id: therapist_id });
        if (schedule) {
            return { status: 201, message: 'Schedule created successfully' }
        }
    } catch (error) {
        // handle duplicate entry (unique constraint violation)
        if (error.name === 'SequelizeUniqueConstraintError') {
            return { status: 409, message: 'Schedule already exists' };
        }
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }
}

const getScheduleByTherapist = async (data) => {
    const therapist_id = data;
    try {
        let schedule = await Schedule.findAll({ where: { therapist_id: therapist_id } });
        if (schedule.length > 0) {
            return { status: 200, message: 'Schedule found', schedule: schedule }
        }
        else {
            return { status: 404, message: 'Schedule not found' }
        }
    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Internal server error' }
    }

}

const getScheduleByDate = async (data) => {

}
/**
 * Updates Schedule Table. Updates "isBooked" field to 1 and adds a specific "patient_id".
 * @param {*} data 
 */
const bookSchedule = async (data) => {
    const { schedule_id, patient_id } = data;
    try {
        let schedule = await Schedule.findOne({ where: { schedule_id: schedule_id } });
        if (schedule) {
            await schedule.update({ isBooked: 1, patient_id: patient_id });
            return { status: 200, message: 'Schedule updated successfully: schedule is booked.' }
        } else {
            return { status: 404, message: 'Schedule not found' }
        }
    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Internal server error.' }
    }
}

/**
 * Updates Schedule Table. Updates "isBooked" field to 0 and removes "patient_id".
 * @param {*} data 
 */
const cancelBooking = async (data) => {
    const schedule_id = data;
    console.log(schedule_id, data)
    try {
        let schedule = await Schedule.findOne({ where: { schedule_id: schedule_id, isBooked: 1 } });
        if (schedule) {
            await schedule.update({ isBooked: 0, patient_id: null });
            return { status: 200, message: 'Schedule updated successfully: booking was cancelled.' }
        } else {
            return { status: 404, message: 'Schedule not found.' }
        }
    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Internal server error' }
    }
}

/**
 * Deletes an existing schedule.
 * @param {*} data 
 */
const deleteSchedule = async (data) => {
    const schedule_id = data;
    try {
        const numDeletedRows = await Schedule.destroy({ where: { schedule_id: schedule_id } });
        console.log(`${numDeletedRows} schedule(s) deleted`);
        return { status: 200, message: 'Schedule deleted successfully.' }
    } catch (error) {
        console.error('Error deleting schedule:', error);
        return { status: 500, message: 'Internal server error.' }
    }
}

module.exports = {
    createSchedule,
    getScheduleByTherapist,
    bookSchedule,
    cancelBooking,
    deleteSchedule
}