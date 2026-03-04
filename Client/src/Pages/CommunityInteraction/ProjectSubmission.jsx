import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiFileText, FiGlobe, FiCalendar, FiGithub, FiCheckCircle } from 'react-icons/fi';
import { FaLightbulb, FaBriefcase, FaRocket, FaPaperPlane, FaLayerGroup, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Ips_Logo from '../../assets/general/IPS WHITE batch 1.png';

// Google Apps Script Web App URL — replace with your deployed URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxCDzkVEoNxZm41ks5SgvVHtfwC1acrjb2lg__PPJkI7H3Cs-VR71-7ds6jZHFbU5111w/exec';

const ProjectSubmission = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('idea');
  const [isSubmittingIdea, setIsSubmittingIdea] = useState(false);
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);
  const [ideaSubmissionSuccess, setIdeaSubmissionSuccess] = useState(false);
  const [projectSubmissionSuccess, setProjectSubmissionSuccess] = useState(false);

  const initialIdeaFormState = { name: '', year: '', title: '', domain: '', description: '' };
  const initialProjectFormState = { name: '', year: '', title: '', domain: '', description: '', githubrepolink: '' };

  const [ideaFormData, setIdeaFormData] = useState(initialIdeaFormState);
  const [projectFormData, setProjectFormData] = useState(initialProjectFormState);
  const [submissionCount, setSubmissionCount] = useState(null);

  useEffect(() => {
    fetch(`${GOOGLE_SCRIPT_URL}?action=count`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === 'number') setSubmissionCount(data.count);
      })
      .catch(() => {
        // fetch failed — keep null, UI shows fallback
      });
  }, []);

  const handleIdeaChange = (e) => {
    const { name, value } = e.target;
    setIdeaFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetIdeaForm = () => setIdeaFormData(initialIdeaFormState);
  const resetProjectForm = () => setProjectFormData(initialProjectFormState);

  const handleIdeaSubmit = (e) => {
    e.preventDefault();
    // Fire-and-forget — Apps Script processes data before response
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({
        sheet: 'Idea',
        name: ideaFormData.name,
        year: ideaFormData.year,
        title: ideaFormData.title,
        domain: ideaFormData.domain,
        description: ideaFormData.description,
      }),
    }).catch(() => {});

    setSubmissionCount((prev) => (prev !== null ? prev + 1 : 1));
    setIdeaSubmissionSuccess(true);
    resetIdeaForm();
    setTimeout(() => setIdeaSubmissionSuccess(false), 3000);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    // Fire-and-forget — Apps Script processes data before response
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({
        sheet: 'Project',
        name: projectFormData.name,
        year: projectFormData.year,
        title: projectFormData.title,
        domain: projectFormData.domain,
        description: projectFormData.description,
        githubrepolink: projectFormData.githubrepolink || '',
      }),
    }).catch(() => {});

    setSubmissionCount((prev) => (prev !== null ? prev + 1 : 1));
    setProjectSubmissionSuccess(true);
    resetProjectForm();
    setTimeout(() => setProjectSubmissionSuccess(false), 3000);
  };

  const perks = [
    { icon: <FaLightbulb className="text-xl" />, text: 'Share innovative ideas' },
    { icon: <FaRocket className="text-xl" />, text: 'Showcase your projects' },
    { icon: <FaLayerGroup className="text-xl" />, text: 'Build your portfolio' },
    { icon: <FaUsers className="text-xl" />, text: 'Get community feedback' },
  ];

  const inputBase = "w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm transition-all duration-200";
  const fieldWrap = "flex items-center gap-3 bg-[#0d1460] border border-[#2a3490] rounded-xl px-4 py-3 hover:border-slate-400 focus-within:border-white focus-within:ring-2 focus-within:ring-white/20 transition-all duration-200";

  const isSubmitting = activeTab === 'idea' ? isSubmittingIdea : isSubmittingProject;
  const isSuccess = activeTab === 'idea' ? ideaSubmissionSuccess : projectSubmissionSuccess;

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
      <div className="flex-1 flex flex-col lg:flex-row items-stretch max-w-[90vw] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 gap-10 lg:gap-16">

        {/* Left Panel — Branding */}
        <div className="lg:w-[40%] flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              Open Submissions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mokoto-text leading-tight mb-5">
              Idea Hub
            </h1>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-md">
              Got a brilliant idea or a completed project? Submit it here and let the community see your work. Every great innovation starts with a single idea.
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
                {[
                  { icon: <FaLightbulb size={14} />, from: 'from-yellow-400', to: 'to-orange-500' },
                  { icon: <FaRocket size={14} />,    from: 'from-blue-400',   to: 'to-indigo-500' },
                  { icon: <FaLayerGroup size={13} />, from: 'from-emerald-400', to: 'to-teal-500' },
                  { icon: <FaUsers size={14} />,     from: 'from-pink-400',   to: 'to-purple-500' },
                ].map(({ icon, from, to }, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${from} ${to} border-2 border-blue-800 flex items-center justify-center text-white shadow-md`}>
                    {icon}
                  </div>
                ))}
              </div>
              <p className="text-blue-200 text-sm">
                {submissionCount !== null
                  ? <><span className="text-white font-semibold">{submissionCount} submission{submissionCount !== 1 ? 's' : ''}</span> and counting</>
                  : <span className="text-blue-300 italic text-xs">Loading count...</span>
                }
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Panel — Form */}
        <div className="lg:w-[60%] flex items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full bg-[#0d1460] border border-[#2a3490] rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
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
                  <h3 className="text-2xl font-bold text-white">Submitted!</h3>
                  <p className="text-blue-100 text-base max-w-sm mx-auto">
                    {activeTab === 'idea'
                      ? 'Thank you for your idea. Our review team will evaluate it shortly.'
                      : 'Thank you for your project. Our review team will evaluate it shortly.'}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Tab Selector */}
                  <div className="flex mb-6 border-b border-[#2a3490]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('idea')}
                      className={`flex items-center gap-2 pb-3 px-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                        activeTab === 'idea'
                          ? 'border-white text-white'
                          : 'border-transparent text-blue-300 hover:text-white'
                      }`}
                    >
                      <FaLightbulb className="text-sm" />
                      Share an Idea
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('project')}
                      className={`flex items-center gap-2 pb-3 px-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                        activeTab === 'project'
                          ? 'border-white text-white'
                          : 'border-transparent text-blue-300 hover:text-white'
                      }`}
                    >
                      <FaBriefcase className="text-sm" />
                      Showcase a Project
                    </button>
                  </div>

                  {/* IDEA FORM */}
                  {activeTab === 'idea' && (
                    <form onSubmit={handleIdeaSubmit} className="space-y-4">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">Share Your Idea</h2>
                        <p className="text-blue-200 text-sm mb-4">Fields marked * are required.</p>
                      </div>

                      {/* Name & Year */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className={fieldWrap}>
                          <FiUser className="text-blue-300 shrink-0" />
                          <input type="text" name="name" value={ideaFormData.name} onChange={handleIdeaChange} placeholder="Your Name *" className={inputBase} required />
                        </div>
                        <div className={fieldWrap}>
                          <FiCalendar className="text-blue-300 shrink-0" />
                          <input type="text" name="year" value={ideaFormData.year} onChange={handleIdeaChange} placeholder="Year (e.g. 2nd Year) *" className={inputBase} required />
                        </div>
                      </div>

                      {/* Title */}
                      <div className={fieldWrap}>
                        <FiFileText className="text-blue-300 shrink-0" />
                        <input type="text" name="title" value={ideaFormData.title} onChange={handleIdeaChange} placeholder="Idea Title *" className={inputBase} required />
                      </div>

                      {/* Domain */}
                      <div className={fieldWrap}>
                        <FiGlobe className="text-blue-300 shrink-0" />
                        <input type="text" name="domain" value={ideaFormData.domain} onChange={handleIdeaChange} placeholder="Domain (e.g. Technology, Healthcare) *" className={inputBase} required />
                      </div>

                      {/* Description */}
                      <textarea
                        name="description"
                        value={ideaFormData.description}
                        onChange={handleIdeaChange}
                        placeholder="Describe your idea in detail... *"
                        rows="3"
                        className="w-full bg-[#0d1460] border border-[#2a3490] text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:border-white resize-none transition-all duration-200 text-sm hover:border-slate-400"
                        required
                      />

                      <button
                        type="submit"
                        disabled={isSubmittingIdea}
                        className={`w-full bg-white text-blue-700 font-bold py-3.5 rounded-xl transition-all duration-300 text-base ${!isSubmittingIdea ? 'hover:bg-blue-50 hover:shadow-xl hover:scale-[1.01]' : 'opacity-70 cursor-not-allowed'}`}
                      >
                        {isSubmittingIdea ? 'Submitting...' : 'Submit Idea →'}
                      </button>
                    </form>
                  )}

                  {/* PROJECT FORM */}
                  {activeTab === 'project' && (
                    <form onSubmit={handleProjectSubmit} className="space-y-4">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">Showcase Your Project</h2>
                        <p className="text-blue-200 text-sm mb-4">Fields marked * are required.</p>
                      </div>

                      {/* Name & Year */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className={fieldWrap}>
                          <FiUser className="text-blue-300 shrink-0" />
                          <input type="text" name="name" value={projectFormData.name} onChange={handleProjectChange} placeholder="Your Name *" className={inputBase} required />
                        </div>
                        <div className={fieldWrap}>
                          <FiCalendar className="text-blue-300 shrink-0" />
                          <input type="text" name="year" value={projectFormData.year} onChange={handleProjectChange} placeholder="Year (e.g. 2nd Year) *" className={inputBase} required />
                        </div>
                      </div>

                      {/* Project Title */}
                      <div className={fieldWrap}>
                        <FiFileText className="text-blue-300 shrink-0" />
                        <input type="text" name="title" value={projectFormData.title} onChange={handleProjectChange} placeholder="Project Title *" className={inputBase} required />
                      </div>

                      {/* Domain */}
                      <div className={fieldWrap}>
                        <FiGlobe className="text-blue-300 shrink-0" />
                        <input type="text" name="domain" value={projectFormData.domain} onChange={handleProjectChange} placeholder="Domain (e.g. Technology, Healthcare) *" className={inputBase} required />
                      </div>

                      {/* Description */}
                      <textarea
                        name="description"
                        value={projectFormData.description}
                        onChange={handleProjectChange}
                        placeholder="Describe your project in detail... *"
                        rows="3"
                        className="w-full bg-[#0d1460] border border-[#2a3490] text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:border-white resize-none transition-all duration-200 text-sm hover:border-slate-400"
                        required
                      />

                      {/* GitHub Repo Link */}
                      <div className={fieldWrap}>
                        <FiGithub className="text-blue-300 shrink-0" />
                        <input type="url" name="githubrepolink" value={projectFormData.githubrepolink} onChange={handleProjectChange} placeholder="GitHub Repository Link *" className={inputBase} required />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmittingProject}
                        className={`w-full bg-white text-blue-700 font-bold py-3.5 rounded-xl transition-all duration-300 text-base ${!isSubmittingProject ? 'hover:bg-blue-50 hover:shadow-xl hover:scale-[1.01]' : 'opacity-70 cursor-not-allowed'}`}
                      >
                        {isSubmittingProject ? 'Submitting...' : 'Submit Project →'}
                      </button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmission;