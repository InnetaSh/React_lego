// components/ReviewForm.jsx
import React, { useState } from "react";
import './Review.css'; 

export default function ReviewForm({ onAddReview }) {
  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text || form.rating === 0) {
      alert("Пожалуйста, заполните все поля и выберите рейтинг.");
      return;
    }
    onAddReview({
      id: Date.now(),
      ...form,
    });
    setForm({ name: "", text: "", rating: 0 });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Оставьте отзыв</h2>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={form.name}
        onChange={handleChange}
      />
      <textarea
        name="text"
        placeholder="Ваш отзыв"
        value={form.text}
        onChange={handleChange}
      />
      <select
        name="rating"
        value={form.rating}
        onChange={handleChange}
      >
        <option value={0}>Оценка</option>
        <option value={1}>★☆☆☆☆</option>
        <option value={2}>★★☆☆☆</option>
        <option value={3}>★★★☆☆</option>
        <option value={4}>★★★★☆</option>
        <option value={5}>★★★★★</option>
      </select>
      <button type="submit">Отправить</button>
    </form>
  );
}
