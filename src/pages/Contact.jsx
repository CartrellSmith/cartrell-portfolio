import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidName = name.trim().length >= 2;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);
  const isValidMessage = message.trim().length >= 10;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidName && isValidEmail && isValidMessage) {
      setSubmitted(true);
    }
  };

  return (
    <section className="contact-page">
      <h2 className="section-title">Contact Me</h2>

      {/* ARIA live region for screen readers */}
      <div id="form-feedback" aria-live="polite" className="sr-only">
        {submitted && "Your message has been sent successfully."}
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <label htmlFor="name">Name</label>
        <input
          id="name"
          aria-required="true"
          aria-invalid={!isValidName}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!isValidName && (
          <span className="input-error" role="alert">
            Name must be at least 2 characters.
          </span>
        )}

        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          aria-required="true"
          aria-invalid={!isValidEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isValidEmail && (
          <span className="input-error" role="alert">
            Please enter a valid email (example: name@example.com).
          </span>
        )}

        {/* Message Field */}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          aria-required="true"
          aria-invalid={!isValidMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {!isValidMessage && (
          <span className="input-error" role="alert">
            Message must be at least 10 characters.
          </span>
        )}

        <button type="submit" className="contact-btn">
          Send Message
        </button>

        {submitted && (
          <p className="form-success" aria-live="polite">
            Thank you! I’ll respond soon.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;