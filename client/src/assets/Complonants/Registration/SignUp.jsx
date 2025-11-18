import React, { useState } from "react";
import { registerUserApi } from "../../Apis/Apis";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
    userLocation: "",
  });
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1 → Step 2
  const handleNext = () => {
    if (!userType) {
      alert("Please select your role before continuing.");
      return;
    }
    setStep(2);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      userType, // important!
    };

    const response = await registerUserApi(finalData);

    if (response.error) {
      alert("❌ " + response.message);
    } else {
      alert("✅ Registration Successful!");
      console.log("USER:", response.user);
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-2xl p-8">

        {/* STEP 1 — Select User Type */}
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-white text-center">
              Select Your Role
            </h1>
            <p className="text-gray-400 text-center mt-2">
              Choose whether you want to register as a Seller or a Customer.
            </p>

            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => setUserType("Seller")}
                className={`px-6 py-3 border rounded-lg text-white text-lg font-semibold transition
                  ${userType === "Seller" ? "bg-blue-600 border-blue-500" : "border-gray-600"}`}
              >
                Seller
              </button>

              <button
                onClick={() => setUserType("Customer")}
                className={`px-6 py-3 border rounded-lg text-white text-lg font-semibold transition
                  ${userType === "Customer" ? "bg-blue-600 border-blue-500" : "border-gray-600"}`}
              >
                Customer
              </button>
            </div>

            <button
              onClick={handleNext}
              className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
            >
              Next →
            </button>
          </>
        )}

        {/* STEP 2 — Registration Form */}
        {step === 2 && (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-white">
              Create Your {userType} Account
            </h2>
            <p className="text-sm text-gray-400">
              Please fill out your information to complete your registration.
            </p>

            <div>
              <label className="text-gray-300">Full Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="text-gray-300">Email Address</label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div>
              <label className="text-gray-300">Phone Number</label>
              <input
                type="text"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Enter phone number"
                required
              />
            </div>

            <div>
              <label className="text-gray-300">Password</label>
              <input
                type="password"
                name="userPassword"
                value={formData.userPassword}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Choose a strong password"
                required
              />
            </div>

            <div>
              <label className="text-gray-300">Location</label>
              <input
                type="text"
                name="userLocation"
                value={formData.userLocation}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="City, Area, State"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-3 w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg"
            >
              ← Back
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
