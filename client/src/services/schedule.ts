import Requests from "./http-common.ts";

export async function createSchedule(
    date_time: dateFns,
    therapist_id: number
) {
    const schedule = {
        date_time: date_time,
        therapist_id: therapist_id
    }
    const res = await Requests.post('/schedule', { schedule });

    if (res.status === 400) {
        console.log("Missing data");
        return
    }
    else if (res.status === 201) {
        console.log("Blogpost created");
        return res.data.blogpost;
    }
    else {
        console.log("Error", res.data.error);
        return res.statusText;
    }
}

export async function getScheduleByTherapist(therapist_id: number) {
    const res = await Requests.get(`/schedule?therapistId=${therapist_id}`);

    if (res.status === 400) {
        console.log("Missing data");
        return
    }
    else if (res.status === 200) {
        console.log("Schedule found");
        return res.data;
    }
    else {
        console.log("Error", res.data.error);
        return res.statusText;
    }
}

export async function bookSchedule(
    schedule_id: number,
    patient_id: number
) {
    const schedule = {
        schedule_id: schedule_id,
        patient_id: patient_id
    }
    const res = await Requests.put('/schedule', {schedule});

    if (res.status === 400) {
        console.log("Missing data");
        return
    }
    else if (res.status === 200) {
        console.log("Schedule booked!");
        return res.data.schedule;
    }
    else {
        console.log("Error", res.data.error);
        return res.statusText;
    }
}

export async function cancelBooking(schedule_id: number) {
    const res = await Requests.put(`/schedule/cancel`, schedule_id);

    if (res.status === 400) {
        console.log("Missing data");
        return
    }
    else if (res.status === 200) {
        console.log("Booking cancelled!");
        return res.data.message;
    }
    else {
        console.log("Error", res.data.error);
        return res.statusText;
    }
}

// export async function deleteSchedule(
//    schedule_id: number,
// ) {
//     const res = await Requests.delete('/schedule', {schedule_id});

//     if (res.status === 200) {
//         console.log("Schedule deleted succesfully");
//         return res;
//     } else {
//         console.log("update failed; error", res.data.error);
//         return res;
//     }

// }

