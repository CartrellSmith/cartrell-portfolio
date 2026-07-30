import { useState } from "react";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    if (!value.trim()) return "This field is required.";

    if (name === "email" && !emailRegex.test(value)) {
      return "Please enter a valid email.";
    }

    if (name === "message" && value.length < 20) {
      return "Message must be at least 20 characters.";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formValues).forEach(([key, value]) => {
      newErrors[key] = validateField(key, value);
    });

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => msg);
    if (!hasError) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="contact-page">
      <h2 className="section-title">Contact Me</h2>

      <p className="section-subtitle">
        “Speak the truth in love.” — Ephesians 4:15
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email
          <input
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
            rows="5"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button
          type="submit"
          className="contact-btn"
          disabled={
            !formValues.name ||
            !formValues.email ||
            !formValues.message ||
            Object.values(errors).some((msg) => msg)
          }
        >
          Send Message
        </button>

        {isSubmitted && (
          <p className="success-message">
            Thank you for reaching out! I’ll respond soon.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;