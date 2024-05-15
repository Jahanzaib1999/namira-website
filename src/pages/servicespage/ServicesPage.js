import React from "react";
import servicesData from "../../assets/data/data.json";
import ServicesList from "../../components/ServicesList";

//styles
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-container container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Let us spoil you. Expertly educated, Namira delivers a wide varierty
          of hairdressing styles and treatments, and our beautifully designed
          salons offer you a space to relax.
        </p>
      </div>
      <div className="services-heading">
        <h1>What We Offer</h1>
      </div>
      <div className="services-list-container">
        <ServicesList services={servicesData.all_services} />
      </div>
    </div>
  );
}

export default ServicesPage;
