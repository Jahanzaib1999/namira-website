import React from "react";
import "./AboutPage.css";
import AboutImage from "../../assets/photos/aboutPageImage.jpg";

function AboutPage() {
  return (
    <div className="about-container container">
      <div className="about-msg-container">
        <h2>Who We Are</h2>
        <p className="main-msg">
          Namira has been servicing Dubai’s residents for over 35 years. Our
          vision is to become a leading hair salon brand in the gulf– known for
          its eye catching spaces, friendly atmosphere, professionally trained
          staff with an outstanding reputation for excellence in the hair
          industry.
        </p>
        <p className="second-msg">
          Namira Salons provide a fun, funky and visually engaging space that is
          family friendly with a great atmosphere created by friendly – customer
          service focused staff offering quality hair services at a competitive
          price point.
        </p>
      </div>
      <div className="about-image-container">
        <img src={AboutImage} alt="About Us Image" />
      </div>
    </div>
  );
}

export default AboutPage;
