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

  const handleChatWithTherapist = () => {
    navigate(`/chat/${therapistId}`);
  };

  return (
    <div
      className={`${styles.card} mt-3 flex flex-col justify-between h-full mr-3`}
    >
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
        <div className="mt-2 flex-col items-center">
          {" "}
          {/* Center the button */}
          <button
            className="bg-[#ccccff] hover:bg-black text-white font-bold py-2 px-2 rounded focus:outline-#ccccff focus:shadow-outline text-sm"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>
          <button
            className="bg-[#ccccff] hover:bg-black text-white font-bold py-1 px-2 mt-2 rounded focus:outline-#ccccff focus:shadow-outline text-sm"
            onClick={handleChatWithTherapist}
          >
            Chat with Therapist
          </button>
        </div>
      </div>
    </div>
  );
}
