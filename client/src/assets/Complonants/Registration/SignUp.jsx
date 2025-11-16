import React, { useState } from "react";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  const handleNext = () => {
    if (!userType) {
      alert("Please select your role before continuing.");
      return;
    }
    setStep(2);
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
                  ${userType === "Seller" ? "bg-blue-600 border-blue-500" : "border-gray-600"}
                `}
              >
                Seller
              </button>

              <button
                onClick={() => setUserType("customer")}
                className={`px-6 py-3 border rounded-lg text-white text-lg font-semibold transition
                  ${userType === "customer" ? "bg-blue-600 border-blue-500" : "border-gray-600"}
                `}
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
          <form className="space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Create Your {userType === "Seller" ? "Seller" : "Customer"} Account
            </h2>
            <p className="text-sm text-gray-400">
              Please fill out your information to complete your registration.
            </p>

            <div>
              <label className="text-gray-300">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="text-gray-300">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="text-gray-300">Phone Number</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="text-gray-300">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="Choose a strong password"
              />
            </div>

            <div>
              <label className="text-gray-300">Location</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded bg-gray-700 text-white border border-gray-600"
                placeholder="City, Area, State"
              />
            </div>

            {/* Hidden userType field */}
            <input type="hidden" value={userType} />

            <button
              type="submit"
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Register
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
