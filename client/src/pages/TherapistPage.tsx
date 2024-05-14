import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { ProfileCard } from "../components/therapistcard/ProfileCard";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import { Random } from "random-js";
import { getAllTherapists, Therapist } from "../services/therapist"; // Assuming Therapist is the type for therapist data
import avatarImage from "../assets/avatar.jpg"; // Import the image asset

const random = new Random(); // Create a new instance of Random

export function TherapistPage() {
  const [therapists, setTherapists] = useState<Therapist[]>([]); // Define the type of therapists
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  // const therapists = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     experience: 3,
  //     email: "john@example.com",
  //     bio: "Specialized in Eating Disorders",
  //     pic: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     experience: 5,
  //     email: "jane@example.com",
  //     bio: "Specialized in Neuropsychology",
  //     pic: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
  //   },
    // Add more therapists as needed
  // ]
  useEffect(() => {
    async function fetchTherapists() {
      try {
        const therapistsData = await getAllTherapists();
        if (Array.isArray(therapistsData)) {
          setTherapists(therapistsData);
        } else {
          console.error("Error fetching therapists:", therapistsData);
        }
      } catch (error) {
        console.error("Error fetching therapists:", error);
      }
    }

    fetchTherapists();
  }, []);
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  const filteredTherapists = searchTerm
    ? therapists.filter((therapist) =>
        therapist.User.username.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : therapists;

  // // Define the name and bio props
  // const name = "John Doe";
  // const bio = "Software developer and tech enthusiast.";
  // const generateRandomPic = () => {
  //   const gender = random.bool() ? "male" : "female"; // Randomly choose between male and female
  //   const number = random.integer(1, 20); // Generate a random number between 1 and 100
  //   return `https://xsgames.co/randomusers/assets/avatars/male/${number}.jpg`; // Construct the URL
  // };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="h-[6rem] bg-[#ccccff] flex flex-col justify-center items-center gap-y-[0.5rem]">
          <p className="max-w-[35rem] text-center">
            <SearchBar onChange={handleSearchChange} />{" "}
          </p>
        </div>
        {/* Pass handleSearchChange as prop */}
        <div className="mt-8 ml-8 flex flex-wrap">
          {filteredTherapists.map((therapist) => (
            <ProfileCard
            therapistId={therapist.therapist_id}
            key={therapist.therapist_id}
            name={therapist.User.username}
            bio={therapist.specialty}
            experience={therapist.experience_years}
            email={therapist.User.email}
            pic={avatarImage}
            />
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

// import { useEffect, useState } from "react";
// import { getAllTherapists, Therapist } from "../services/therapist"; // Assuming Therapist is the type for therapist data

// export function TherapistPage() {
//   const [therapists, setTherapists] = useState<Therapist[]>([]); // Define the type of therapists

//   useEffect(() => {
//     async function fetchTherapists() {
//       try {
//         const therapistsData = await getAllTherapists();
//         if (Array.isArray(therapistsData)) {
//           setTherapists(therapistsData);
//         } else {
//           console.error("Error fetching therapists:", therapistsData);
//         }
//       } catch (error) {
//         console.error("Error fetching therapists:", error);
//       }
//     }

//     fetchTherapists();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="px-4">
//         {" "}
//         {/* Ad
//        padding on left and right */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {" "}
//           Grid layout
//            {therapists.map((therapist) => (
//             <ProfileCard
//               therapistId={therapist.therapist_id}
//               key={therapist.therapist_id}
//               name={therapist.User.username}
//               bio={therapist.specialty}
//               experience={therapist.experience_years}
//               email={therapist.User.email}
//               pic={avatarImage}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
