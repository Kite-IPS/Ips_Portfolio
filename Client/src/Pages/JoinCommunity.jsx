import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import aboutImg from '../assets/IPS-WHITE-batch.png';

const JoinCommunity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
    skill: '',
    interest: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    interest: ''
  });
  
  const form = useRef(); // Ref to access the form data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = { name: '', email: '', interest: '' };
    const { name, email, interest } = formData;

    // Validate name
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Enter a valid email address';
    }

    // Validate interested areas
    if (!interest.trim()) {
      errors.interest = 'Interested areas are required';
    }

    setFormErrors(errors);

    return Object.values(errors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const emailContent = `Name: ${formData.name}\nEmail: ${formData.email}\nDepartment: ${formData.department}\nYear: ${formData.year}\nTechnical Skill: ${formData.skill}\nInterested Areas: ${formData.interest}`;

    // Send email using emailjs
    emailjs
      .sendForm(
        'service_veawp9g', // Your service ID
        'template_4jyepoy', // Your template ID
        form.current, // Form reference
        'maKw0xiMpSl3fit09' // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true); // Set submission state
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="p-10 rounded-lg shadow-md w-96 relative z-10 backdrop-blur-md bg-opacity-150">
        <img
          src={aboutImg}
          alt="IPS Tech Community"
          className="absolute w-100 -inset-2 ml-1 mt-43 -z-50 opacity-45 rounded-lg"
        />
        <h2 className="text-2xl font-bold text-center mb-4">Join IPS Tech Community</h2>
        {submitted ? (
          <p className="text-2xl text-green-600 font-bold text-center">Thank you for joining! We'll reach out soon.</p>
        ) : (
          <form onSubmit={handleSubmit} ref={form} className="space-y-4">
            {['name', 'email', 'department', 'year', 'skill'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 capitalize">{field.replace('_', ' ')}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-600 transition"
                />
                {formErrors[field] && <p className="text-red-500 text-sm">{formErrors[field]}</p>}
              </div>
            ))}
            <div>
              <label className="block text-gray-700">Interested Areas</label>
              <textarea
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-600 transition resize-y"
              ></textarea>
              {formErrors.interest && <p className="text-red-500 text-sm">{formErrors.interest}</p>}
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
