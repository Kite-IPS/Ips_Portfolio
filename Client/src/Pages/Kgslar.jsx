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
            <h1 className="text-3xl font-bold mb-4 text-blue-600">KG-SLAR Project</h1>
            <p className="text-gray-700 mb-4">
              Detailed description of the KG-SLAR project goes here. 
              Include key features, technologies used, and project highlights.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/" 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Back to Home
              </Link>
              <a 
                href="#" 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Project Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kgslar;