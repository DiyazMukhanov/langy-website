import { useEffect, useState } from "react";
import styles from "./StarRating.module.scss";
import StarRatingIcon from "public/icons/star_rating.svg";
import StarRatingChosenIcon from "public/icons/star_rating_chosen.svg";
import Image from "next/image";

export const StarRating = ({ register, setValue, name }) => {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    register(name, { required: true });
  }, [register, name]);

  const handleClick = (value: number) => {
    setRating(value);
    setValue(name, value);
  };

  return (
    <div className={styles.starsContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        // <Image
        //   key={star}
        //   className={styles.star}
        //   src={star <= rating ? StarRatingChosenIcon : StarRatingIcon}
        //   onClick={() => handleClick(star)}
        //   alt="star"
        // />
        star <= rating ? <StarRatingChosenIcon onClick={() => handleClick(star)} className={styles.star}/> : <StarRatingIcon onClick={() => handleClick(star)} className={styles.star}/>
      ))}
    </div>
  );
};
