// import { ProfileCard } from '../components/therapistcard/ProfileCard'
// import Navbar from '../components/NavBar'
// export function TherapistPage() {

//     // Define the name and bio props
//     const name = "John Doe";
//     const bio = "Software developer and tech enthusiast.";
//     return (
//         <>
//             <Navbar />
//             <ProfileCard name={name} bio={bio} />
//         </>

//     )
// }

import { useEffect, useState } from "react";
import { ProfileCard } from "../components/therapistcard/ProfileCard";
import Navbar from "../components/NavBar";
// import { getAllTherapists, Therapist } from "../services/therapist"; // Assuming Therapist is the type for therapist data
// import { Random } from 'random-js';

// const random = new Random(); // Create a new instance of Random
import avatarImage from "../assets/avatar.jpg"; // Import the image asset

export function TherapistPage() {
  // const [therapists, setTherapists] = useState<Therapist[]>([]); // Define the type of therapists

  // useEffect(() => {
  //   async function fetchTherapists() {
  //     try {
  //       const therapistsData = await getAllTherapists();
  //       if (Array.isArray(therapistsData)) {
  //         setTherapists(therapistsData);
  //       } else {
  //         console.error("Error fetching therapists:", therapistsData);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching therapists:", error);
  //     }
  //   }

  //   fetchTherapists();
  // }, []);

  //   const generateRandomPic = () => {
  //     const gender = random.bool() ? 'male' : 'female'; // Randomly choose between male and female
  //     const number = random.integer(1,50); // Generate a random number between 1 and 100
  //     return `https://xsgames.co/randomusers/assets/avatars/male/${number}.jpg`; // Construct the URL
  //   };
  return (
    <>
      <Navbar />
      <div className="px-4">
        {" "}
        {/* Ad
       padding on left and right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {" "}
          {/* Grid layout */}
          {/* {therapists.map((therapist) => (
            <ProfileCard
              therapistId={therapist.therapist_id}
              key={therapist.therapist_id}
              name={therapist.User.username}
              bio={therapist.specialty}
              experience={therapist.experience_years}
              email={therapist.User.email}
              pic={avatarImage}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}
