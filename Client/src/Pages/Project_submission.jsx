import React, { useState } from 'react';

const ProjectSubmission = () => {
  const [submissionType, setSubmissionType] = useState('idea'); // 'idea' or 'project'

  const [formData, setFormData] = useState({
    name: '',
    year: '',
    title: '',
    domain: '',
    completionTime: '',
    projectFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Submission Successful!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Project Submission</h2>
      <div className="flex gap-5 mb-5">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            submissionType === 'idea' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSubmissionType('idea')}
        >
          Share an Idea
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            submissionType === 'project' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSubmissionType('project')}
        >
          Showcase a Project
        </button>
      </div>

      <div className="w-[80%] flex flex-col md:flex-row gap-10">
        {/* Share an Idea Form */}
        <div
          className={`w-full md:w-1/2 p-6 rounded-lg shadow-md bg-white ${
            submissionType === 'idea' ? 'block' : 'hidden md:block opacity-50'
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">Share Your Idea</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name', 'year', 'title', 'domain', 'completionTime'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 capitalize">{field.replace('_', ' ')}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit Idea
            </button>
          </form>
        </div>

        {/* Showcase a Project Form */}
        <div
          className={`w-full md:w-1/2 p-6 rounded-lg shadow-md bg-white ${
            submissionType === 'project' ? 'block' : 'hidden md:block opacity-50'
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">Showcase Your Project</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name', 'year', 'title', 'domain', 'completionTime'].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 capitalize">{field.replace('_', ' ')}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            ))}
            {/* File Upload for Video/Prototype */}
            <div>
              <label className="block text-gray-700">Upload Video/Prototype</label>
              <input
                type="file"
                name="projectFile"
                accept="video/*,image/*"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmission;
