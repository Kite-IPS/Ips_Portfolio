import React from 'react';
import { useNavigate } from 'react-router-dom';

// Minimal placeholder JoinCommunity page (temporary)
const JoinCommunity = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full text-center p-8">
        <h1 className="text-2xl font-bold mb-4">Join the Community</h1>
        <p className="mb-6">The full application form was temporarily removed during maintenance. Please check back soon.</p>
        <div className="flex justify-center gap-3">
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-indigo-600 text-white rounded">Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;

