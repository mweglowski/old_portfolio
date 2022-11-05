import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = React.forwardRef((props, ref) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6fvw3ug",
        "template_sb4p7te",
        e.target,
        "Dkw8D23oajFTCHf6v"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    console.log('works or not?')
  };

  // const submitFormHandler = (e) => {
  //   e.preventDefault();
  //   sendEmail();
  // };

  return (
    <section className="contact-section" ref={ref}>
      <div className="contact-section-background-gradient"></div>
      <div className="contact-section-content">
        <div className="contact-section-title">Contact</div>
        <form
          onSubmit={sendEmail}
          className="contact-section-form"
        >
          <input
            type="text"
            name="user_email"
            className="contact-section-form-email-input"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="contact-section-form-textarea"
            placeholder="Message"
          />
          <button className="contact-section-button" type="submit">
            Send Message
          </button>
        </form>
        <p className="contact-section-p">
          I will try to reply as soon as possible.
        </p>
      </div>
    </section>
  );
});

export default Contact;
