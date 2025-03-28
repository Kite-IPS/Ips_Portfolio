import React from 'react';
import { Link } from 'react-router-dom';
import KGSLAR from '../assets/KG-SLAR.png';

const Kgslar = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={KGSLAR}
              alt="KG-SLAR Project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">KG-SLAR Project 🚀</h1>
            <p className="text-lg text-gray-700 mb-4">
              <strong>KG-SLAR</strong> (Student Late Attendance Report System) is an innovative solution 
              designed to automate and streamline attendance tracking using <strong>RFID Technology</strong>. 🎓
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
              <p className="mb-2">
              ✅ <strong>RFID-Based Automation</strong>: Students simply scan their RFID cards, and their attendance is instantly recorded. 🚀
              </p>
              <p className="mb-2">
                ✅ <strong>Real-Time Tracking</strong>: Get instant insights into late arrivals and attendance records. 📊
              </p>
              <p className="mb-2">
                ✅ <strong>Automated Reports</strong>: Late attendance reports are generated and sent to faculty and parents. 📝
              </p>
              <p className="mb-2">
                ✅ <strong>User-Friendly Dashboard</strong>: A visually appealing and easy-to-use interface for administration. 💻
              </p>
              <p>
                ✅ <strong>Secure & Reliable</strong>: Data is securely stored and easily accessible for future reference. 🔒
              </p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">🚀 Why KG-SLAR?</h3>
            <div className="text-lg text-gray-700">
              <p>🔹 Eliminates manual errors and paper-based records.</p>
              <p>🔹 Saves time for faculty and students.</p>
              <p>🔹 Encourages punctuality and accountability.</p>
              <p>🔹 Seamlessly integrates with existing school/college management systems.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">📊 How It Works?</h3>
            <div className="text-lg text-gray-700">
              <p>1️⃣ Students scan their <strong>RFID card</strong> upon arrival.</p>
              <p>2️⃣ The system records the entry time and cross-checks it with the scheduled class time.</p>
              <p>3️⃣ Late arrivals are automatically flagged, and reports are generated.</p>
              <p>4️⃣ Faculty and parents receive real-time notifications.</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-semibold mb-2">🌟 Making Campuses Smarter!</h3>
            <div className="text-lg text-gray-700">
              <p className="mb-4">
                With <strong>KG-SLAR</strong>, institutions can <strong>enhance attendance management</strong>, ensure <strong>student discipline</strong>, 
                and <strong>improve administrative efficiency</strong> like never before! 🎓
              </p>
              <p className="font-bold text-blue-600 text-xl">
                📌 Join the Future of Smart Attendance Tracking Today! 🚀🎓
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Kgslar;