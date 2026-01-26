import React, { useState } from "react";

export default function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Email sent successfully!");
  };

  const sendWhatsApp = () => {
  const { name, email, message } = formData;
  const phoneNumber = "919392276970";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=Name:%20${encodeURIComponent(
    name
  )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              rows="5"
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="btn primary"
              onClick={sendWhatsApp}
            >
              Send Message
            </button>
            
          </div>
        </form>
      </div>
    </section>
  )
}

