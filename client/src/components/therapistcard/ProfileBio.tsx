// import React from 'react';

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
    <>
    <p className="profile-bio">Specialty: {bio}</p>
    <p className="profile-years">Experience: {experience === null ? 'NA' : experience}</p>
    <p className="profile-email">Email: {email}</p>
    </>
  )
  
}
