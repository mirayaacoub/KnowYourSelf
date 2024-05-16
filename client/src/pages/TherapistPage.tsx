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
        therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : therapists;

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
