import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AvatarSizes } from "../components/avatar";
import { Sidebar } from "../components/sideBar";
import { updatePatient, getPatient } from "../services/patient";
import { updateTherapist, getTherapist } from "../services/therapist";
import { DialogBox } from "../components/dialogbox";
export function ProfilePage() {
  // const [username, setUsername] = useState("");
  let s = sessionStorage.getItem("user");
  // let role;
  // if (s) {
  //   let userObj = JSON.parse(s);
  //   role = userObj.role;
  //   console.log("user email isss " + username);
  // }
  // const [isTherapist, toggleIsTherapist] = useState(role == "therapist");

  // if (role == "therapist") {
  //   toggleIsTherapist(true);
  // }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [experience, setExperience] = useState(0);
  const [specialty, setSpecialty] = useState("");
  const [role, setRole] = useState("");
  const [isTherapist, setIsTherapist] = useState(false);
  const [id, setId] = useState(null);
  // const navigate = useNavigate();
  const [formDataChanged, setFormDataChanged] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);


  useEffect(() => {
    let s = sessionStorage.getItem("user");

    if (s) {
      let userObj = JSON.parse(s);
      setUsername(userObj.username);
      setEmail(userObj.email);
      setRole(userObj.role);
      setIsTherapist(userObj.role === "therapist");
      setId(userObj.user_id);
      if (userObj.role === "therapist") {
        fetchTherapist(userObj.user_id);
      } else {
        fetchPatient(userObj.user_id);
      }
    }
  }, []);

  useEffect(() => {
    setFormDataChanged(true);
  }, [username, email, diagnosis, experience, specialty]);

  useEffect(() => {
    // Log dialogMessage whenever it changes
    console.log(dialogMessage);
  }, [dialogMessage]);

  async function fetchTherapist(user_id: number) {
    try {
      const res = await getTherapist(user_id);
      if (res) {
        console.log(200, res);
        setSpecialty(res.specialty);
        setExperience(res.experience_years);
      } else {
        console.log("not found", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPatient(user_id: number) {
    try {
      const res = await getPatient(user_id);
      if (res) {
        console.log(200, res);
        setDiagnosis(res.diagnosis_history);
      } else {
        console.log("not found", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormDataChanged(false);
    // Perform action to save updated user data
    if (role === "patient") {
      console.log(id, diagnosis)
      try {
        await updatePatient(id, diagnosis);
        setDialogMessage("Patient data updated successfully!");
        console.log(dialogMessage, "Patient data updated successfully!");
        setShowDialog(true);
        // alert('success');
      } catch (error) {
        console.error("Error updating patient data:", error);
      }
    } else {


      console.log(id, specialty, experience)
      try {

        await updateTherapist(id, specialty, experience);
        setDialogMessage("Therapist data updated successfully!");
        setShowDialog(true);
        // alert('success');
        console.log(dialogMessage, "Therapist data updated successfully!");
      } catch (error) {
        console.error("Error updating therapist data:", error);
      }
    }
    // message
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center mt-8">
        <Sidebar></Sidebar>
        <div className="flex-1 flex-col justify-center items-center  mt-[-10rem] ml-20">
          <AvatarSizes></AvatarSizes>
          <h1 className="my-2">Personal Information</h1>
          <form
            className="w-full max-w-md"
            onSubmit={async (event) => {
              handleSubmit(event);
            }}
          >
            <label className="block mb-2">Username</label>
            <input
              readOnly
              // className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
              autoComplete="username"
              type="username"
              value={username}
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />

            <label className="block mb-2">Email</label>
            <input
              readOnly
              autoComplete="email"
              value={email}
              type="email"
              // className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />

            {isTherapist ? (
              <div>
                <label className="block mb-2">Specialty</label>
                <input
                  type="text"
                  value={specialty}
                  className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
                  onChange={(e) => {
                    setSpecialty(e.target.value);
                    setFormDataChanged(true);
                  }}
                />
                <label className="block mb-2">Years of Experience</label>
                <input
                  type="number"
                  className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
                  value={experience}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value >= 0 && value <= 99) {
                      setExperience(value);
                      setFormDataChanged(true);
                    }
                  }}
                />
              </div>
            ) : (
              <div>
                <label className="block mb-2">Diagnosis History</label>
                <input
                  type="text"
                  value={diagnosis}
                  className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
                  onChange={(e) => {
                    setDiagnosis(e.target.value);
                    setFormDataChanged(true);
                  }}
                />
              </div>
            )}

            <input
              type="submit"
              disabled={!formDataChanged}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${!formDataChanged ? "opacity-50 cursor-not-allowed" : ""
                }`}
              value="Save Changes"
            />
            <br />
            <br />
          </form>
        </div>
      </div>
      {showDialog && (
        <DialogBox
          message={dialogMessage}
          onClose={() => setShowDialog(false)}
        />
      )}
    </>
  );
}
