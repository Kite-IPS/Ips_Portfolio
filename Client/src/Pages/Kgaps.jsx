import { Link } from 'react-router-dom';
import KGAPS from '../assets/KG-APS.jpg';

const Kgaps = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-6">
           <img src={KGAPS} alt="KG-APS" className="w-full h-full object-cover"/>
          </div>
          <div className="md:w-1/2 p-6">
            <p className="text-lg text-gray-700 mb-4">
              <strong>KG-APS</strong> (Academic Progress System) is a <strong>comprehensive dashboard</strong> 
              designed to help colleges track, update, and analyze student academic performance efficiently. 📚
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
              <p className="mb-2">✅ <strong>Centralized Dashboard</strong>: View and manage academic records in one place.</p>
              <p className="mb-2">✅ <strong>Real-Time Performance Tracking</strong>: Monitor students&apos; grades, attendance, and progress instantly.</p>
              <p className="mb-2">✅ <strong>Automated Reports</strong>: Generate detailed reports for students, faculty, and parents.</p>
              <p className="mb-2">✅ <strong>User-Friendly Interface</strong>: Intuitive design for seamless navigation and analysis.</p>
              <p className="mb-2">✅ <strong>Secure & Reliable</strong>: Ensures data accuracy and confidentiality.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">🚀 Why KG-APS?</h3>
            <div className="text-lg text-gray-700">
              <p className="mb-2">🔹 Eliminates manual record-keeping and reduces errors.</p>
              <p className="mb-2">🔹 Provides instant academic insights for better decision-making.</p>
              <p className="mb-2">🔹 Enhances student engagement and motivation.</p>
              <p className="mb-2">🔹 Helps faculty identify struggling students and offer timely support.</p>
              <p>🔹 Seamlessly integrates with existing college management systems.</p>
            </div>
          </section>
          
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">📊 How It Works?</h3>
            <div className="text-lg text-gray-700">
              <p>1️⃣ Student academic data (grades, attendance, assignments, etc.) is uploaded to the system.</p>
              <p>2️⃣ The dashboard visualizes trends, strengths, and areas of improvement.</p>
              <p>3️⃣ Students, faculty, and administrators access real-time insights.</p>
              <p>4️⃣ Automated reports and alerts keep stakeholders informed about progress.</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-semibold mb-2">🌟 Transforming Academic Tracking for the Future!</h3>
            <div className="text-lg text-gray-700">
              <p className="mb-4">
                With <strong>KG-APS</strong>, colleges can <strong>enhance student success</strong>, 
                ensure <strong>data-driven decision-making</strong>, and <strong>streamline academic progress tracking</strong> like never before! 📚
              </p>
              <p className="font-bold text-blue-600 text-xl">
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