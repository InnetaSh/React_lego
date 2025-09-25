import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm.jsx";
import ReviewList from "./ReviewList.jsx";
import "../style.css";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(() => {
   
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className="reviews-component">
      <ReviewForm onAddReview={handleAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}
