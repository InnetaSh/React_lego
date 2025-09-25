// components/ReviewList.jsx
import React from "react";
import '../style.css';

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
}

export default function ReviewList({ reviews }) {
  return (
    <div className="reviews-list">
      {reviews.map(({ id, name, text, rating }) => (
        <div className="review-card" key={id}>
          <div className="avatar">{name[0]}</div>
          <div className="review-content">
            <h3>{name}</h3>
            <StarRating rating={rating} />
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
