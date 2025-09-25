import React, { useState } from 'react';
import '../style.css';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Введите имя';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Введите корректный email';
    if (!formData.subject) newErrors.subject = 'Введите тему';
    if (!formData.message) newErrors.message = 'Введите сообщение';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      
      console.log("Отправлено:", formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Свяжитесь с нами</h2>

      {submitted && <div className="success-message">Спасибо! Ваше сообщение отправлено.</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Тема:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </label>

        <label>
          Сообщение:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit" className='buttonForm'>Отправить</button>
      </form>
    </div>
  );
}
