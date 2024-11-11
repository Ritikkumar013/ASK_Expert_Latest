"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 lg:p-12 bg-white shadow-md rounded-md mb-4"
    >
      
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Name Input */}
        <div className="basis-1/2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your Fullname*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full border-b border-gray-300 p-2 focus:outline-none"
            // placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="basis-1/2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className=" block w-full border-b border-gray-300 p-2 focus:outline-none"
            // placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
      {/* Mobile Number Input */}
      <div className="basis-1/2">
        <label
          htmlFor="mobile"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your Mobile Number*
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="block mt-2 w-full border-b border-gray-300 p-2 focus:outline-none"
          // placeholder="Enter your mobile number"
        />
      </div>

      {/* Choose Your Service Select */}
      <div className="basis-1/2">
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700"
        >
          Select your Service*
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none"
        >
          <option value="">Select a service</option>
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
          <option value="Service 3">Service 3</option>
          <option value="Service 4">Service 4</option>
          <option value="Service 5">Service 5</option>
        </select>
      </div>
      </div>

      {/* Subject Input */}
      <div className="mb-8">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your Subject*
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="block w-full border-b border-gray-300 p-2 focus:outline-none"
          // placeholder="Enter subject"
        />
      </div>

      {/* Your Message Textarea */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="block w-full border-b border-gray-300 p-2 focus:outline-none"
          // placeholder="Enter your message"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md  focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
