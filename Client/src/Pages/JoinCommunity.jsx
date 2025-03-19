import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiArrowRight, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import aboutImg from '../assets/IPS-WHITE-batch.png';
<link rel='stylesheet' href='index.css'></link>

const JoinCommunity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
    skill: '',
    interest: '',
    areaOfInterest: '',
    githubLink: '',
    linkedinLink: '',
    phoneNumber: '',
    proficientIn: []
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, proficientIn: [...formData.proficientIn, value] });
    } else {
      setFormData({
        ...formData,
        proficientIn: formData.proficientIn.filter(item => item !== value)
      });
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.interest || !formData.phoneNumber) {
      alert('Please fill in all required fields.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Enter a valid email address.');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert('Enter a valid 10-digit phone number.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    emailjs.sendForm(
      'service_veawp9g',
      'template_4jyepoy',
      form.current, 
      'maKw0xiMpSl3fit09'
    ).then(
      () => setSubmitted(true),
      () => alert('An error occurred, please try again.')
    );
  };

  // Common input field styles with hover effect
  const inputStyles = "w-full bg-transparent text-black placeholder-stone-500 focus:outline-none text-lg transition-all duration-300 ease-in-out";
  const inputContainerStyles = "relative flex items-center space-x-3 bg-gray-100 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-700/50 transition-all duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 focus-within:ring-opacity-50";
  const selectStyles = "w-full bg-gray-100 border border-gray-500 text-gray-500 px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl"
      >
       
        <div className="absolute w-25 top-4 ml-7">
          <img src={aboutImg} alt="IPS Tech Community" className="w-20 h-16 object-contain" />
        </div>

        <div className="relative z-10 p-10">
          
        <h2 className="text-xl sm:text-2xl md:text-3xl -mt-4 ml-15 md:ml-11 font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-gray-100 to-stone-950 mokoto-text">
          IPS Tech Community
        </h2>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 mt-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full">
                  <FiArrowRight className="w-8 h-8 text-green-400 animate-bounce" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-500">Welcome!</h3>
                <p className="text-gray-500 text-lg">
                  Thank you for joining the IPS Tech Community.<br />
                  We'll be in touch soon with more details.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                ref={form}
                className="space-y-6 mt-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[{ name: 'name', icon: <FiUser />, placeholder: 'Full Name' }, { name: 'email', icon: <FiMail />, placeholder: 'Email Address' }].map((field, index) => (
                    <motion.div key={field.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                      <div className={inputContainerStyles}>
                        <span className="text-gray-500">{field.icon}</span>
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={inputStyles}
                        />
                      </div>
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <div className={inputContainerStyles}>
                      <span className="text-gray-500"><FiPhone /></span>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={inputStyles}
                      />
                    </div>
                  </motion.div>
                  <select 
                    name="year" 
                    value={formData.year} 
                    onChange={handleChange} 
                    className={selectStyles}
                  >
                    <option value="" className='text-gray-500'>Select Academic Year</option>
                    {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <select 
                    name="department" 
                    value={formData.department} 
                    onChange={handleChange} 
                    className={selectStyles}
                  >
                    <option value="">Select Department</option>
                    {['AI & DS','AIML','CSBS','CSE','CYS','ECE','IT','MECH'].map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <select 
                    name="areaOfInterest" 
                    value={formData.areaOfInterest} 
                    onChange={handleChange} 
                    className={selectStyles}
                  >
                    <option value="">Select Area of Interest</option>
                    {['Artificial Intelligence', 'Web Development', 'IoT', 'App Development', 'UI/UX', '3D Designing', 'Robotics'].map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
                <input 
                  type="text" 
                  name="skill" 
                  value={formData.skill} 
                  onChange={handleChange} 
                  placeholder="Enter Your Skills" 
                  className={`w-full bg-gray-100 text-gray-500 border border-gray-500 px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`} 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <div className={inputContainerStyles}>
                      <span className="text-gray-500"><FiGithub /></span>
                      <input
                        type="text"
                        name="githubLink"
                        value={formData.githubLink}
                        onChange={handleChange}
                        placeholder="GitHub Profile Link"
                        className={inputStyles}
                      />
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <div className={inputContainerStyles}>
                      <span className="text-gray-500"><FiLinkedin /></span>
                      <input
                        type="text"
                        name="linkedinLink"
                        value={formData.linkedinLink}
                        onChange={handleChange}
                        placeholder="LinkedIn Profile Link"
                        className={inputStyles}
                      />
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-100 border border-gray-500 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 focus-within:ring-opacity-50">
                  <p className="text-gray-500 mb-2">Proficient in</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {['Python', 'C', 'C++', 'Rust', 'Go', 'Javascript'].map((lang) => (
                      <div key={lang} className="flex items-center">
                        <input
                          type="checkbox"
                          id={lang}
                          name="proficientIn"
                          value={lang}
                          checked={formData.proficientIn.includes(lang)}
                          onChange={handleCheckboxChange}
                          className="mr-2 text-blue-500 focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                        />
                        <label htmlFor={lang} className="text-gray-500 hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">{lang}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <textarea 
                  name="interest" 
                  value={formData.interest} 
                  onChange={handleChange} 
                  placeholder="Share your technical interests and aspirations..." 
                  rows="4" 
                  className="w-full bg-gray-100 text-gray-500 border border-gray-500 px-4 py-3 rounded-lg focus:outline-none resize-none transition-all duration-300 ease-in-out hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                />
                
                {/* Hidden fields for emailjs to include proficientIn as a comma-separated string */}
                <input type="hidden" name="proficientInList" value={formData.proficientIn.join(', ')} />
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg"
                >
                  Join the Community
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinCommunity;