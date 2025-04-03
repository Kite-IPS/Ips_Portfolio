import { Link } from 'react-router-dom';
import KGAPS from '../assets/KG-APS.jpg';

const Kgaps = () => {
  return (
<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-2 sm:p-4">
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-4 sm:p-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-blue-600">KG-APS 🚀</h1>
          <p className="text-base sm:text-lg text-gray-700">
            <strong>Smart Academic Progress Tracking System</strong>
          </p>
          <img src={KGAPS} alt="KG-APS" className="w-full h-full object-cover mt-4"/>
        </div>
          </div>
          <div className="md:w-1/2 p-4 sm:p-6">
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              <strong>KG-APS</strong> (Academic Progress System) is a <strong>comprehensive dashboard</strong>  
              designed to help colleges track, update, and analyze student academic performance efficiently. 📚
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
              <p className="mb-2">✅ <strong>Centralized Dashboard</strong>: View and manage academic records in one place.</p>
              <p className="mb-2">✅ <strong>Real-Time Performance Tracking</strong>: Monitor students&apos; grades, attendance, and progress instantly.</p>
              <p className="mb-2">✅ <strong>Automated Reports</strong>: Generate detailed reports for students, faculty, and parents.</p>
              <p className="mb-2">✅ <strong>User-Friendly Interface</strong>: Intuitive design for seamless navigation and analysis.</p>
              <p className="mb-2">✅ <strong>Secure & Reliable</strong>: Ensures data accuracy and confidentiality.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">🚀 Why KG-APS?</h3>
            <div className="text-base sm:text-lg text-gray-700">
              <p className="mb-2">🔹 Eliminates manual record-keeping and reduces errors.</p>
              <p className="mb-2">🔹 Provides instant academic insights for better decision-making.</p>
              <p className="mb-2">🔹 Enhances student engagement and motivation.</p>
              <p className="mb-2">🔹 Helps faculty identify struggling students and offer timely support.</p>
              <p>🔹 Seamlessly integrates with existing college management systems.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">📊 How It Works?</h3>
            <div className="text-base sm:text-lg text-gray-700">
              <p className="mb-1">1️⃣ Student academic data (grades, attendance, assignments, etc.) is uploaded to the system.</p>
              <p className="mb-1">2️⃣ The dashboard visualizes trends, strengths, and areas of improvement.</p>
              <p className="mb-1">3️⃣ Students, faculty, and administrators access real-time insights.</p>
              <p className="mb-1">4️⃣ Automated reports and alerts keep stakeholders informed about progress.</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">🌟 Transforming Academic Tracking for the Future!</h3>
            <div className="text-base sm:text-lg text-gray-700">
              <p className="mb-4">
                With <strong>KG-APS</strong>, colleges can <strong>enhance student success</strong>, 
                ensure <strong>data-driven decision-making</strong>, and <strong>streamline academic progress tracking</strong> like never before! 📚
              </p>
              <p className="font-bold text-blue-600 text-lg sm:text-xl text-center">
                📌 Experience the Power of Smart Academic Insights Today! 🚀📚
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Kgaps;