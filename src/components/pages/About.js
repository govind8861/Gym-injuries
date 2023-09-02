import React from 'react';
import './About.css'; // Import your custom CSS file for additional styling

function About() {
  return (
    <section className="about-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="about-header h1 my-2 py-3 ">About</h2>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-6 mb-4">
            <div className="about-content">
              <div className="about-point">
                <h3 className="point-title">Treatment of Injuries</h3>
                <p className="point-description">
                  We provide comprehensive information on injury treatments, including diagnosis, therapy, and rehabilitation techniques. Our goal is to help you make informed decisions about your health.
                </p>
              </div>
              <div className="about-point">
                <h3 className="point-title">Why Use Our Chat App</h3>
                <p className="point-description">
                  Our chat app offers real-time access to injury experts. You can chat with professionals who can provide personalized advice and guidance tailored to your specific injury-related concerns.
                </p>
              </div>
              <div className="about-point">
                <h3 className="point-title">What You'll Get</h3>
                <p className="point-description">
                  By using our app, you'll gain access to a wealth of injury-related knowledge, receive answers to your questions, and connect with a supportive community dedicated to health and wellness.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.muscleandfitness.com/wp-content/uploads/2023/07/onclockinjury514.jpg?quality=86&strip=all" 
              alt="App "
              className="img-fluid about-image mb-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
