import React from 'react';
import { Link } from 'react-router-dom';
import KGCAR from '../assets/KG-CAR.png'; 

const Kgcar = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-6">
            <img
              src={KGCAR} // Replace with actual image URL
              alt="KG-CAR Project"
              className="w-full h-full object-cover rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2 p-6">
            <p className="text-lg text-gray-700 mb-4">
              <strong>KG-CAR</strong> (Certificate Acknowledgment System) is an <strong>innovative digital solution</strong> 
              designed to simplify and secure the distribution and acknowledgment of certificates. 📜
            </p>
            <div className="flex space-x-4 mb-4 ml-35 mt-7">
              <Link
                to="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Back to Home
              </Link>
              {/* <a
                href="#project-details"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Project Details
              </a> */}
            </div>
          </div>
        </div>
        
        <div id="project-details" className="p-6 bg-gray-50">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">🔍 Project Overview</h2>
          
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">🌟 Key Features</h3>
            <div className="text-lg text-gray-700">
              <p className="mb-2">✅ <strong>Effortless Certificate Management</strong>: Automates the issuance and acknowledgment process.</p>
              <p className="mb-2">✅ <strong>Digital Acknowledgment System</strong>: Recipients can confirm receipt with a simple scan or click.</p>
              <p className="mb-2">✅ <strong>Real-Time Tracking</strong>: Institutions can track when and by whom a certificate was received.</p>
              <p className="mb-2">✅ <strong>User-Friendly Dashboard</strong>: Provides administrators with easy access to all issued certificates.</p>
              <p>✅ <strong>Secure & Reliable</strong>: Ensures authenticity, preventing certificate fraud and misplacement.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">🚀 Why KG-CAR?</h3>
            <div className="text-lg text-gray-700">
              <p className="mb-2">🔹 Eliminates paperwork and manual errors.</p>
              <p className="mb-2">🔹 Provides instant acknowledgment and tracking.</p>
              <p className="mb-2">🔹 Enhances security with digital verification.</p>
              <p className="mb-2">🔹 Saves administrative time and effort.</p>
              <p>🔹 Seamlessly integrates with institutional databases.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">📊 How It Works?</h3>
            <div className="text-lg text-gray-700">
              <p>1️⃣ The system generates and registers each certificate.</p>
              <p>2️⃣ Recipients receive a <strong>unique QR code or RFID scan</strong> to acknowledge receipt.</p>
              <p>3️⃣ The system records the acknowledgment with a timestamp.</p>
              <p>4️⃣ Institutions can track, verify, and manage certificate distribution in real-time.</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-semibold mb-2">🌟 The Future of Certificate Management!</h3>
            <div className="text-lg text-gray-700">
              <p className="mb-4">
                With <strong>KG-CAR</strong>, institutions can <strong>digitize certificate acknowledgment</strong>, 
                reduce administrative burden, and <strong>ensure authenticity and security</strong> effortlessly! 📜
              </p>
              <p className="font-bold text-blue-600 text-xl">
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