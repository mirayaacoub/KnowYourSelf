import { ProfileBio } from './ProfileBio';
import { ProfileName } from './ProfileName';
import { ProfilePicture } from './ProfilePiture';

import styles from './ProfileCard.module.scss';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  therapistId: number;
  name: string;
  bio: string;
  pic: string;
  experience: number;
  email: string,
}

export function ProfileCard({ therapistId, name, bio, pic, experience, email }: ProfileCardProps) {
  const navigate = useNavigate()
  const handleBookAppointment = () => {
    navigate(`/book-appointment/${therapistId}`);
  }
  return (
    <div className={styles.card}>
      <ProfilePicture
        src={pic}
        alt="Profile"
      />
      <ProfileName name={name} />
      <ProfileBio bio={bio} experience={experience} email={email} />
      <div className="flex justify-center mt-4"> {/* Center the button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleBookAppointment}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}