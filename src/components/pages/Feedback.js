import React, { useState } from 'react';
import './Feedback.css'; // Import your custom CSS file for additional styling

function Feedback() {
  const initialFormData = {
    name: '',
    email: '',
    rating: '',
    comment: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStarClick = (value) => {
    setSelectedRating(value);
    setFormData({ ...formData, rating: value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Feedback submitted with data:', formData);
	// alert("form data:")
	alert(JSON.stringify(formData, null, 2));

    // Clear the form data after submission
    setFormData(initialFormData);
    setSelectedRating(null);
  };

  return (
    <div className="container feedback-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="feedback-header my-3">Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="feedback-label">Name:</label>
              <input
                type="text"
                className="form-control feedback-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="feedback-label">Email:</label>
              <input
                type="email"
                className="form-control feedback-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="feedback-label">Rating:</label>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label
                    key={value}
                    className={`star ${selectedRating >= value ? 'selected' : ''}`}
                    onClick={() => handleStarClick(value)}
                  >
                    <i className="fas fa-star"></i>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label className="feedback-label">Comment:</label>
              <textarea
                className="form-control feedback-input"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="d-block mx-auto m-3 cta-button">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
