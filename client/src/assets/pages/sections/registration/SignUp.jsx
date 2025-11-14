import React, { useState } from "react";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    contact: "",
    interests: [],
    newsletter: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [id]: checked });
    } else if (type === "select-multiple") {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (opt) => opt.value
      );
      setFormData({ ...formData, interests: selectedOptions });
    } else if (type === "radio") {
      setFormData({ ...formData, contact: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validateStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Please fill out all required fields.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!formData.username || !formData.password || !formData.confirmPassword) {
        alert("Please fill out all fields.");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Account Setup Wizard
          </h1>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 ${
                  currentStep >= 1 ? "" : "opacity-50"
                }`}
              >
                Personal Info
              </span>
              <span
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 ${
                  currentStep >= 2 ? "" : "opacity-50"
                }`}
              >
                Account Details
              </span>
              <span
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 ${
                  currentStep === 3 ? "" : "opacity-50"
                }`}
              >
                Preferences
              </span>
            </div>

            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} id="multi-step-form">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="step">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="step">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="step">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Preferred Contact Method
                  </label>

                  <div className="flex items-center mb-4">
                    <input
                      id="contact-email"
                      type="radio"
                      name="contact"
                      value="email"
                      checked={formData.contact === "email"}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900">
                      Email
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="contact-phone"
                      type="radio"
                      name="contact"
                      value="phone"
                      checked={formData.contact === "phone"}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900">
                      Phone
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Interests
                  </label>
                  <select
                    id="interests"
                    multiple
                    onChange={handleChange}
                    value={formData.interests}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="health">Health & Wellness</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food & Cooking</option>
                  </select>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    id="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900">
                    Subscribe to newsletter
                  </label>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
