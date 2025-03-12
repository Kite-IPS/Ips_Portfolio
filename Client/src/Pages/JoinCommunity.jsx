import React, { useState } from 'react';
import aboutImg from '../assets/IPS-WHITE-batch.png'

const JoinCommunity = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    year: '',
    skill: '',
    interest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Details:', formData);
    setSubmitted(true);
    sendEmail(formData);
  };

  const sendEmail = async (data) => {
    const emailContent = `Name: ${data.name}\nDepartment: ${data.department}\nYear: ${data.year}\nTechnical Skill: ${data.skill}\nInterested Areas: ${data.interest}`;

    const response = await fetch('https://api.emailservice.com/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'gopz0505@gmail.com',
        subject: 'New Community Join Request',
        text: emailContent,
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Email sending failed');
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="p-10 rounded-lg shadow-md w-96 relative z-10 backdrop-blur-md bg-opacity-150">
      <img
        src={aboutImg}
        alt="IPS Tech Community"
        className="absolute w-100 -inset-2 ml-1 mt-33 -z-50 opacity-45 rounded-lg"
      />
        <h2 className="text-2xl font-bold text-center mb-4">Join IPS Tech Community</h2>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you for joining! We'll reach out soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name', 'department', 'year', 'skill'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 capitalize">{field.replace('_', ' ')}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-600 transition"
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-700">Interested Areas</label>
              <textarea
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-600 transition resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Join Our Community
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinCommunity;
