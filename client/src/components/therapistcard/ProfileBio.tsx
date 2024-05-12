import { Link } from "react-router-dom";

interface ProfileBioProps {
  bio: string;
  experience: number;
  email: string;
}

// const ProfileBio: React.FC<ProfileBioProps> = ({ bio }) => {
//   return <p className="profile-bio">{bio}</p>;
// };

// export default ProfileBio;

export function ProfileBio({ bio, experience, email }: ProfileBioProps) {
  return (
    <div className="flex flex-col">
      {" "}
      {/* Aligns children vertically */}
      {/* <div className="flex "> */} {/* Container for both elements */}
      <p className="profile-bio font-bold mr-2">Specialty:</p>{" "}
      {/* "Specialty:" label */}
      <p className="ml-0">{bio}</p> {/* Bio text */}
      {/* </div> */}
      <div className="flex items-center">
        <p className="profile-years font-bold mr-2">Experience:</p>
        <p>{experience === null ? "NA" : experience} years</p>
      </div>
      <p className="profile-email font-bold">Email: </p>
      <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
        {email}
      </a>
    </div>
  );
}
