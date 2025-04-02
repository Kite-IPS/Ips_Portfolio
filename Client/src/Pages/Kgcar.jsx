import React from 'react';
import { Link } from 'react-router-dom';

const Kgcar = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-4 sm:p-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-blue-600">KG-CAR 🚀</h1>
              <p className="text-base sm:text-lg text-gray-700">
                <strong>Smart Certificate Acknowledgment System</strong>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-4 sm:p-6">
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              <strong>KG-CAR</strong> (Certificate Acknowledgment System) is an <strong>innovative digital solution</strong> 
              designed to simplify and secure the distribution and acknowledgment of certificates. 📜
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <Link
                to="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 bg-gray-50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">🔍 Project Overview</h2>
          
          <section className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">🌟 Key Features</h3>
            <div className="text-base sm:text-lg text-gray-700">
              <p className="mb-2">✅ <strong>Effortless Certificate Management</strong>: Automates the issuance and acknowledgment process.</p>
              <p className="mb-2">✅ <strong>Digital Acknowledgment System</strong>: Recipients can confirm receipt with a simple scan or click.</p>
              <p className="mb-2">✅ <strong>Real-Time Tracking</strong>: Institutions can track when and by whom a certificate was received.</p>
              <p className="mb-2">✅ <strong>User-Friendly Dashboard</strong>: Provides administrators with easy access to all issued certificates.</p>
              <p>✅ <strong>Secure & Reliable</strong>: Ensures authenticity, preventing certificate fraud and misplacement.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">🚀 Why KG-CAR?</h3>
            <div className="text-base sm:text-lg text-gray-700">
              <p className="mb-2">🔹 Eliminates paperwork and manual errors.</p>
              <p className="mb-2">🔹 Provides instant acknowledgment and tracking.</p>
              <p className="mb-2">🔹 Enhances security with digital verification.</p>
              <p className="mb-2">🔹 Saves administrative time and effort.</p>
              <p>🔹 Seamlessly integrates with institutional databases.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">📊 How It Works?</h3>
            <div className="text-base sm:text-lg text-gray-700">
              <p className="mb-1">1️⃣ The system generates and registers each certificate.</p>
              <p className="mb-1">2️⃣ Recipients receive a <strong>unique QR code or RFID scan</strong> to acknowledge receipt.</p>
              <p className="mb-1">3️⃣ The system records the acknowledgment with a timestamp.</p>
              <p className="mb-1">4️⃣ Institutions can track, verify, and manage certificate distribution in real-time.</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">🌟 The Future of Certificate Management!</h3>
            <div className="text-base sm:text-lg text-gray-700">
              <p className="mb-4">
                With <strong>KG-CAR</strong>, institutions can <strong>digitize certificate acknowledgment</strong>, 
                reduce administrative burden, and <strong>ensure authenticity and security</strong> effortlessly! 📜
              </p>
              <p className="font-bold text-blue-600 text-lg sm:text-xl text-center">
                📌 Join the Smart Certificate Management Revolution Today! 🚀📜
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Kgcar;