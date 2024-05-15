import React from "react";
import ContactForm from "../../components/ContactForm";

//styles
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page-container container">
      <div className="contact-message-container">
        <h1>Contact Us</h1>
        <p>
          For Bookings, please contact the number below. For all other
          inquiries, complaints, suggestions and career advice please fill the
          form and submit.
        </p>
        <p>
          <a href="mailto:namirasaloon1986@gmail.com">
            namirasaloon1986@gmail.com
          </a>
        </p>
        <p>(055) 555-5555</p>
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
