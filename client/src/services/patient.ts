import Requests from "./http-common.ts";

export async function getPatient(
    user_id: number
) {
    const res = await Requests.get(`/patient?id=${user_id}`);
    console.log(res);
    if (res.status === 400) {
        console.log("Missing data");
        return
    }
    else if (res.status === 200) {
        console.log("Patient found");
        return res.data.patient;
    }
    else {
        console.log("Error", res.data.error);
        return res.statusText;
    }
}

export async function updatePatient(user_id: number, diagnosis_history: string) {
    const patient = {
        diagnosis_history: diagnosis_history,
        user_id: user_id,
    }
    const res = await Requests.put('/patient', { patient });

    if (res.status === 200) {
        console.log("patient updated succesfully");
        return res;
    } else if (res.status === 404) {
        console.log("update failed; patient not found");
        return res;
    } else {
        console.log("update failed; error", res.data.error);
        return res;
    }

}

