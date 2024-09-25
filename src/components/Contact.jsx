import React, { useState } from "react";
import { arrowUp } from "../images";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //   console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      await emailjs.send(
        "service_l283e2f",
        "template_evh04l7",
        {
          from_name: formData.name,
          to_name: "Subhasish",
          from_email: formData.email,
          to_email: "gunidd243@gmail.com",
          message: formData.message,
        },
        "PqOm3gAi0zr0lKtNN"
      );
      setLoading(false);

      alert("Your message has been sent");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    }
  };
  return (
    <section className="my-2" id="contact">
      <div
        className=" min-h-screen flex items-center
         justify-center flex-col"
      >
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <form
            className="mt-12 flex flex-col space-y-7"
            onSubmit={handleSubmit}
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="field-input"
                value={formData.name}
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="field-input"
                value={formData.email}
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Share your thoughts or inquiries..."
                onChange={handleChange}
                className="field-input"
                value={formData.message}
                required
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img src={arrowUp} alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
