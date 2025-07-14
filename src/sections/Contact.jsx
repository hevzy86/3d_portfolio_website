import React, { useState, useRef } from "react";
import Simplecomputermodel from "../components/Simplecomputermodel";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear success/error messages when user starts typing again
    if (success) setSuccess(false);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Optional: You could implement actual email sending here
      // Example with EmailJS (you would need to install the package):
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      */
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex-center section-padding"
    >
      <div className="w-full h-full padding-x flex-col-center">
        <div className="hero-badge mb-4">
          💬 Have questions or ideas? Let's talk!
        </div>

        <h2 className="semi-bold md:text-5xl text-4xl mb-10 text-center">
          Get in Touch - Let's Connect
        </h2>

        <div className="grid-12-cols w-full gap-6">
          {/* Contact Form - Left Side (6 columns) */}
          <div className="xl:col-span-6 col-span-12 card-border rounded-lg p-6">
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="mb-6">
                <label>Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What's your good name?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a35] text-white rounded-md placeholder-gray-400"
                />
              </div>

              <div className="mb-6">
                <label>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="What's your email address?"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a35] text-white rounded-md placeholder-gray-400"
                />
              </div>

              <div className="mb-6">
                <label>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-blue-100 text-white rounded-md resize-none"
                ></textarea>
              </div>

              {/* Success message */}
              {success && (
                <div className="mb-6 py-3 px-4 bg-green-800/30 border border-green-600 text-green-200 rounded-md">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="mb-6 py-3 px-4 bg-red-800/30 border border-red-600 text-red-200 rounded-md">
                  {error}
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className={`cta-wrapper w-full ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="cta-button group w-full">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin inline-block mr-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          SENDING...
                        </>
                      ) : (
                        "SEND MESSAGE"
                      )}
                    </p>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side (6 columns) - 3D Model only (calendar removed) */}
          <div className="xl:col-span-6 col-span-12 min-h-96 rounded-lg overflow-hidden flex flex-col gap-6 items-center">
            <div className="w-full h-full bg-[#e78832] rounded-3xl overflow-hidden mb-6">
              <Simplecomputermodel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
