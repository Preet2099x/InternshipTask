import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ submitted: true, submitting: false, error: null });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setStatus({ submitted: false, submitting: false, error: 'Failed to submit form' });
    }
  };

  return (
    <div id="contact" className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          {status.submitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">We have received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-500"
                required
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-500"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-500 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md disabled:opacity-50"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.error && (
                <div className="mt-4 text-red-500 text-center">{status.error}</div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
