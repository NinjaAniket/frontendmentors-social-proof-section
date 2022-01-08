import React from "react";
import "./rating-section.scss";
import stars from "../assets/images/icon-star.svg";
import { ratings_data } from "../assets/dummy-data";

export default function RatingSection() {
  return (
    <div className="ratings">
      {ratings_data.map((review) => (
        <div className="rating" key={review.id}>
          <div className="ratings__img-wrapper">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <img
                src={stars}
                alt="stars"
                className="ratings__star-icon"
                key={i}
              />
            ))}
          </div>
          {review.desc}
        </div>
      ))}
    </div>
  );
}
