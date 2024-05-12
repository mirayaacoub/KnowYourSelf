import { ProfileBio } from "./ProfileBio";
import { ProfileName } from "./ProfileName";
import { ProfilePicture } from "./ProfilePiture";

import styles from "./ProfileCard.module.scss";
import { useNavigate } from "react-router-dom";

interface ProfileCardProps {
  therapistId: number;
  name: string;
  bio: string;
  pic: string;
  experience: number;
  email: string;
}
export function ProfileCard({
  therapistId,
  name,
  bio,
  pic,
  experience,
  email,
}: ProfileCardProps) {
  const navigate = useNavigate();
  const handleBookAppointment = () => {
    navigate(`/book-appointment/${therapistId}`);
  };

  return (
    <div className={`${styles.card} flex flex-col justify-between h-full mr-3`}>
      <div className="flex-none">
        {" "}
        {/* Content that doesn't grow */}
        <div className="flex justify-center">
          {" "}
          {/* Center the profile picture */}
          <div className="w-2/4">
            <ProfilePicture src={pic} alt="Profile" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <ProfileName name={name} />
          <ProfileBio bio={bio} experience={experience} email={email} />
        </div>
      </div>
      <div className="flex-none">
        {" "}
        {/* Content that doesn't grow */}
        <div className="mt-2 flex justify-center">
          {" "}
          {/* Center the button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
