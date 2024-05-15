import React, { useState } from "react";

//styles
import "./ServicesList.css";

function ServicesList({ services }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleToggleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1); // Close the currently expanded service
    } else {
      setSelectedIndex(index); // Open the clicked service
    }
  };

  // const handleExpandClick = (index) => {
  //   setSelectedIndex(index);
  // };

  // selectedIndex === index ? -1 :

  return (
    <div className="services-list">
      {services.map((service, index) => (
        <div key={index} className="service">
          <div className="service-header">
            <div
              className="service-title"
              onClick={() => handleToggleClick(index)}
            >
              <div className="service-name">{service.heading}</div>
              <button className="expand-button">
                {selectedIndex === index ? "-" : "+"}
              </button>
            </div>

            {selectedIndex === index && (
              <div className="service-description">{service.description}</div>
            )}
          </div>
          <div className="service-separator" />
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
