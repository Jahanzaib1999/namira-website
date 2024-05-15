import React, { useEffect, useState } from "react";
import "./HomePage.css";
import data from "../../assets/data/data.json";
import ServicesList from "../../components/ServicesList";
import servicesSectionPhoto from "../../assets/photos/servicesSectionPhoto.jpg";
import contactSectionPhoto from "../../assets/photos/contactSectionPhoto.jpg";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import ContactForm from "../../components/ContactForm";

import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    setServicesData(data.main_page_services);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="homepage container">
      <div className="homepage-section-1" data-aos="zoom-in">
        <div className="homepage-section-1-content">
          <h1>FIND A SALON</h1>
          <h4>We look forward to welcoming you.</h4>
          <button>BOOK NOW</button>
        </div>
      </div>

      <div className="homepage-section-2" data-aos="zoom-in">
        <div className="homepage-section-2-left">
          <h2>Our Services</h2>
          <button onClick={() => (window.location.href = `/services`)}>
            ALL SERVICES
          </button>
        </div>
        <div className="homepage-section-2-right">
          <ServicesList services={servicesData} />
        </div>
      </div>

      <div className="homepage-section-3" data-aos="fade-up">
        <div className="homepage-section-3-left">
          <h2>More about our brand</h2>
          <p>
            The cornerstone of Namira is <span>family and education</span>,
            starting with the core team and staff that have built this reputed
            growing brand. Today it is a recognisable brand with a strong
            reputation for affordable, quality hair services.
            <br />
            <br /> Namira’s mission is now focusing on building up local
            community engagement and educating and developing a new generation
            of young hair stylists. We endeavour to pave the way for a new
            generation of young barbers and hair stylists offering mentorships
            and career pathways.
          </p>
        </div>
        <div className="homepage-section-3-right">
          <img src={servicesSectionPhoto} alt="Brand" />
        </div>
      </div>

      <div className="homepage-section-4" data-aos="fade-up">
        <h2>Follow us on Socials</h2>
        <div className="social-buttons">
          <a href="https://www.facebook.com">
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com">
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <div className="homepage-section-5" data-aos="fade-up">
        <div className="home-contact-form-container">
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
        <div className="contact-image-container">
          <img src={contactSectionPhoto} alt="Contact us" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
