// import React from 'react';

interface ProfilePictureProps {
  src: string;
  alt: string;
}

// const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt }) => {
//   return <img className="profile-picture" src={src} alt={alt} />;
// };

// export default ProfilePicture;

export function ProfilePicture({ src, alt }: ProfilePictureProps) {
  return <img className="profile-picture" src={src} alt={alt} />;
}
