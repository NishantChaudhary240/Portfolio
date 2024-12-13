import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const serviceID = "service_k95r3p5"; // Your service ID
    const templateID = "template_9w53qwu"; // Your template ID
    const publicKey = "7B0B0AIQ0_vGt34Tg"; // Replace with your public key from EmailJS

    // Sending the email via EmailJS
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Your Name", // Optional: Add the recipient name if needed
        },
        publicKey
      )
      .then((response) => {
        setStatus("Thank you for reaching out! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      })
      .catch((error) => {
        setStatus("Error submitting form, please try again.");
        console.log("Error:", error);
      });
  };

  return (
    <div className="contact-section py-5" id="contact">
      <h2 className="text-center mb-3">Contact Me</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
            {status && <div className="mt-3">{status}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
