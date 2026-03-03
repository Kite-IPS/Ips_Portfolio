import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiGithub, FiLinkedin, FiCheckCircle } from 'react-icons/fi';
import { FaUsers, FaRocket, FaCode, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Ips_Logo from '../../assets/general/IPS WHITE batch 1.png';

const JoinCommunity = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
    skills: [],
    interest: '',
    areaOfInterest: '',
    githubLink: '',
    linkedinLink: '',
    phoneNumber: '',
    proficientIn: []
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, proficientIn: [...formData.proficientIn, value] });
    } else {
      setFormData({ ...formData, proficientIn: formData.proficientIn.filter(item => item !== value) });
    }
  };

  const handleSkillSelection = (skill) => {
    if (formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: formData.skills.filter(item => item !== skill) });
    } else {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
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

  // Google Apps Script Web App URL — replace with your deployed URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxCDzkVEoNxZm41ks5SgvVHtfwC1acrjb2lg__PPJkI7H3Cs-VR71-7ds6jZHFbU5111w/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    try {
      const payload = {
        sheet: 'Intern',
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        department: formData.department,
        year: formData.year,
        areaOfInterest: formData.areaOfInterest,
        skills: formData.skills.join(', '),
        proficientIn: formData.proficientIn.join(', '),
        github: formData.githubLink,
        linkedin: formData.linkedinLink,
        interests: formData.interest,
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (error) {
      // Google Apps Script processes the data before CORS error — treat as success
      console.log('Form submitted (CORS response expected):', error);
      setSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  const skillsList = [
    "JavaScript", "Frameworks & Libraries", "Databases & APIs",
    "Mathematics & Algorithms", "Programming (Python & Libraries)",
    "Model Deployment & Cloud Integration", "Real-Time Operating Systems (RTOS)",
    "IoT Communication Protocols", "Embedded & Cloud Integration",
    "Cybersecurity & Data Handling", "3D Modeling Software",
    "Rendering & Animation", "3D Printing & Simulation",
    "Robot Operating System (ROS)", "Kinematics & Motion Planning",
    "Sensor Integration & Actuation", "Visual & Interaction Design",
    "App Deployment & Performance Optimization"
  ];

  const perks = [
    { icon: <FaCode className="text-xl" />, text: 'Work on live projects' },
    { icon: <FaUsers className="text-xl" />, text: 'Expert mentorship' },
    { icon: <FaRocket className="text-xl" />, text: 'Skill acceleration' },
    { icon: <FaStar className="text-xl" />, text: 'Community events & hackathons' },
  ];

  const inputBase = "w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm transition-all duration-200";
  const fieldWrap = "flex items-center gap-3 bg-[#0d1460] border border-[#2a3490] rounded-xl px-4 py-3 hover:border-slate-400 focus-within:border-white focus-within:ring-2 focus-within:ring-white/20 transition-all duration-200";
  const selectBase = "w-full bg-[#0d1460] border border-[#2a3490] text-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-white hover:border-slate-400 transition-all duration-200 text-sm";

  return (
    <div className="min-h-screen font-primary flex flex-col" style={{ background: 'linear-gradient(149deg,rgba(3, 12, 105, 1) 66%, rgba(28, 39, 163, 1) 100%)' }}>

      {/* Top Nav */}
      <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between bg-[#080d47] border-b border-[#2a3490]">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to Home</span>
        </button>
        <div className="flex items-center gap-3">
          <img src={Ips_Logo} alt="IPS Logo" className="w-8 h-8 object-contain" />
          <span className="text-white font-semibold text-sm sm:text-base mokoto-text hidden sm:block">IPS Tech Community</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-stretch max-w-[90vW] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 gap-10 lg:gap-30">

        {/* Left Panel — Branding */}
        <div className="lg:w-[45%] flex flex-col justify-center text-white lg:mr-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              Open Applications
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mokoto-text leading-tight mb-5">
              Join IPS<br />Tech Community
            </h1>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-md">
              Become part of a passionate community of developers, designers, and innovators. Build real products, grow your skills, and launch your tech career.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                  <div className="text-blue-300 shrink-0">{perk.icon}</div>
                  <span className="text-sm text-blue-100 font-medium">{perk.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['A','B','C','D'].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-blue-800 flex items-center justify-center text-white text-xs font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-blue-200 text-sm"><span className="text-white font-semibold">30+ members</span> already building together</p>
            </div>
          </motion.div>
        </div>

        {/* Right Panel — Form */}
        <div className="lg:w-[58%] flex items-start lg:items-center lg:ml-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full bg-[#0d1460] border border-[#2a3490] rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-5"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-400/20 rounded-full mb-2">
                    <FiCheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">You're in!</h3>
                  <p className="text-blue-100 text-base max-w-sm mx-auto">
                    Welcome to IPS Tech Community. We'll review your application and reach out soon.
                  </p>
                  <button
                    onClick={() => navigate('/')}
                    className="mt-4 inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200"
                  >
                    Back to Home
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-bold text-white mb-1">Your Details</h2>
                  <p className="text-blue-200 text-sm mb-4">Fill in the form below to apply. Fields marked * are required.</p>

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <FiUser className="text-blue-300 shrink-0" />
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" className={inputBase} />
                    </div>
                    <div className={fieldWrap}>
                      <FiMail className="text-blue-300 shrink-0" />
                      <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className={inputBase} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <FiPhone className="text-blue-300 shrink-0" />
                      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number *" className={inputBase} />
                    </div>
                    <select name="year" value={formData.year} onChange={handleChange} className={selectBase}>
                      <option value="">Academic Year</option>
                      {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select name="department" value={formData.department} onChange={handleChange} className={selectBase}>
                      <option value="">Department</option>
                      {['AI & DS','AIML','CSBS','CSE','CYS','ECE','IT','MECH'].map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <select name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange} className={selectBase}>
                      <option value="">Area of Interest</option>
                      {['Artificial Intelligence','Web Development','IoT','App Development','UI/UX','3D Designing','Robotics'].map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>

                  {/* Skills multi-select */}
                  <div className="relative">
                    <div
                      className={`w-full bg-[#0d1460] border rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 text-sm ${skillsDropdownOpen ? 'border-white ring-2 ring-white/20' : 'border-[#2a3490] hover:border-slate-400'}`}
                      onClick={() => setSkillsDropdownOpen(!skillsDropdownOpen)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-blue-100">{formData.skills.length > 0 ? `${formData.skills.length} skill(s) selected` : 'Select Your Skills'}</span>
                        <svg className={`w-4 h-4 text-blue-300 transition-transform duration-300 ${skillsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {formData.skills.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {formData.skills.map(skill => (
                            <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/40 text-white border border-white/20">
                              {skill}
                              <button type="button" className="ml-1 hover:text-red-300 focus:outline-none" onClick={(e) => { e.stopPropagation(); handleSkillSelection(skill); }}>×</button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {skillsDropdownOpen && (
                      <div className="absolute z-20 mt-1 w-full bg-[#0d1460] border border-[#2a3490] rounded-xl shadow-2xl max-h-52 overflow-y-auto">
                        {skillsList.map(skill => (
                          <div key={skill} className={`px-4 py-2.5 cursor-pointer text-sm transition-colors duration-150 hover:bg-[#1a2480] ${formData.skills.includes(skill) ? 'bg-[#1a2480] text-white' : 'text-slate-300'}`} onClick={() => handleSkillSelection(skill)}>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" checked={formData.skills.includes(skill)} onChange={() => {}} className="h-3.5 w-3.5 accent-blue-400" />
                              {skill}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* GitHub & LinkedIn */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <FiGithub className="text-blue-300 shrink-0" />
                      <input type="text" name="githubLink" value={formData.githubLink} onChange={handleChange} placeholder="GitHub Profile Link" className={inputBase} />
                    </div>
                    <div className={fieldWrap}>
                      <FiLinkedin className="text-blue-300 shrink-0" />
                      <input type="text" name="linkedinLink" value={formData.linkedinLink} onChange={handleChange} placeholder="LinkedIn Profile Link" className={inputBase} />
                    </div>
                  </div>

                  {/* Proficient In */}
                  <div className="bg-[#0d1460] border border-[#2a3490] rounded-xl px-4 py-3">
                    <p className="text-blue-200 text-sm mb-2.5 font-medium">Proficient In</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['Python', 'C', 'C++', 'Rust', 'Go', 'Javascript'].map(lang => (
                        <label key={lang} className="flex items-center gap-2 text-sm text-blue-100 cursor-pointer hover:text-white transition-colors">
                          <input type="checkbox" id={lang} name="proficientIn" value={lang} checked={formData.proficientIn.includes(lang)} onChange={handleCheckboxChange} className="accent-blue-400 h-3.5 w-3.5" />
                          {lang}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <textarea
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    placeholder="Share your technical interests and aspirations... *"
                    rows="3"
                    className="w-full bg-[#0d1460] border border-[#2a3490] text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:border-white resize-none transition-all duration-200 text-sm hover:border-slate-400"
                  />

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-white text-blue-700 font-bold py-3.5 rounded-xl transition-all duration-300 text-base ${!isSending ? 'hover:bg-blue-50 hover:shadow-xl hover:scale-[1.01]' : 'opacity-70 cursor-not-allowed'}`}
                  >
                    {isSending ? 'Submitting...' : 'Join the Community →'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;