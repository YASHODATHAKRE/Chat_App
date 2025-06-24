import React, { useState } from "react";
import axios from "../config/api.jsx";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg({ type: "", text: "" });

    try {
      const { data } = await axios.post("/public/create", formData);
      setResponseMsg({ type: "success", text: data.message });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const msg = error.response?.data?.message || "Something went wrong";
      setResponseMsg({ type: "error", text: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-4 lg:py-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-cyan-800">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our
            products, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-1/2 m-auto">
          <div className="lg:col-span-7 p-8 lg:p-">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2  bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-[#325946] text-white font-semibold rounded-lg hover:bg-cyan-700 transition-all duration-300 disabled:bg-cyan-400"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {responseMsg.text && (
              <div
                className={`mt-6 text-center font-medium p-3 rounded-lg ${
                  responseMsg.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {responseMsg.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;