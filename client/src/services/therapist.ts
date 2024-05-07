import Requests from "./http-common.ts";

export async function getTherapist(
    user_id: number
) {
    const res = await Requests.get(`/therapist?id=${user_id}`);

    if (res.status === 400) {
        console.log("Missing data");
        return
    }
    else if (res.status === 200) {
        console.log("Therapist found");
        return res.data.therapist;
    }
    else {
        console.log("Error", res.data.error);
        return res.statusText;
    }
}

export async function getAllTherapists() {
    const res = await Requests.get(`/therapist/all`);

    if (res.status === 400) {
        console.log("Missing data");
        return
    }
    else if (res.status === 200) {
        console.log("Therapists found");
        return res.data.therapist;
    }
    else {
        console.log("Error", res.data.error);
        return res.statusText;
    }
}

export async function updateTherapist(user_id: number, specialty: string, experience_years: number) {
    const therapist = {
        user_id:user_id,
        specialty: specialty,
        experience_years: experience_years
    }
    const res = await Requests.put('/therapist', {therapist});

    if (res.status === 200) {
        console.log("therapist updated succesfully");
        return res;
    } else if (res.status === 404) {
        console.log("update failed; therapist not found");
        return res;
    } else {
        console.log("update failed; error", res.data.error);
        return res;
    }

}

