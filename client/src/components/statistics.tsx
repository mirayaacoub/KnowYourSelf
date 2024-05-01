import { FC } from "react";

interface Props {
  followers: number;
  likes: number;
  photos: number;
}

const formatNumber = (num: number): any => {
  const result = num / 1000;
  return `${result}K`;
};

const Statistics: FC<Props> = ({ followers, likes, photos }) => {
  const statArray = [
    { label: "Followers", number: formatNumber(followers) },
    { label: "Likes", number: formatNumber(likes) },
    { label: "Photos", number: formatNumber(photos) },
  ];
  console.log("number", formatNumber(photos));

  return (
    <div className="card__statistics__container">
      {statArray.map(({ label, number }) => (
        <div key={label} className="card__statistics">
          <div className="statistics__number">{number}</div>
          <div className="statistics__label">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
