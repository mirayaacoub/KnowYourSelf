import { FC } from "react";
import { CardProps } from "./card";

const Information: FC<CardProps> = ({ profile }) => {
  return (
    <div className="card__info">
      <div className="card__details">
        <p className="details__name">{profile.firstName}</p>
        <p className="details__name">{profile.lastName}</p>
        <p className="details__age color--dark-grayish-blue">{profile.age}</p>
      </div>
      <p className="card__country">{profile.country}</p>
    </div>
  );
};

export default Information;
