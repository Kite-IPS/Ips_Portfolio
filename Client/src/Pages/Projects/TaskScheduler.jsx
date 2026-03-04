import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CircleCheck, TrendingUp, Bell, Users, BarChart3, MessageSquare } from 'lucide-react';
import TASKSCHEDULER from '../../assets/projects/TASK-SCHEDULER.png';

const TaskScheduler = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <style>{`
        @media (max-width: 640px) {
          .hero-title { font-size: 2.25rem; line-height: 2.5rem; }
          .hero-subtitle { font-size: 1.25rem; line-height: 1.75rem; }
          .hero-buttons { flex-direction: column; gap: 0.75rem; }
          .hero-buttons a { width: 100%; text-align: center; }
        }
        @media (max-width: 768px) {
          .section-title { font-size: 2rem; line-height: 2.25rem; }
          .section-text { font-size: 1rem; line-height: 1.5rem; }
          .feature-title { font-size: 1.25rem; }
        }
        @media (max-width: 480px) {
          .process-step { padding: 1rem; }
          .step-number { width: 2.5rem; height: 2.5rem; font-size: 1.25rem; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                <span className="text-slate-700">TASK SCHEDULER</span>
                <span className="inline-block ml-2 animate-pulse"><Calendar className="w-10 h-10 inline" /></span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Workflow & Task Management System
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                A task scheduling and workflow management system to create, track, and manage academic or administrative tasks across departments with real-time progress visibility.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50"
                >
                  Back to Home
                </button>
                <a
                  href="#features"
                  className="px-6 py-3 bg-white text-slate-700 border border-slate-700 font-medium rounded-md hover:bg-slate-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={TASKSCHEDULER} alt="Task Scheduler" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <div className="w-16 md:w-24 h-1 bg-slate-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <CircleCheck className="w-8 h-8 md:w-10 md:h-10" />, title: "Task Creation & Assignment", desc: "Create tasks with deadlines, priorities, and assign them to specific users or departments." },
            { icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />, title: "Progress Tracking", desc: "Real-time status updates — Pending, In Progress, Completed, Overdue — with visual indicators." },
            { icon: <Bell className="w-8 h-8 md:w-10 md:h-10" />, title: "Deadline Alerts", desc: "Automated reminders and notifications ensure tasks are completed on time." },
            { icon: <Users className="w-8 h-8 md:w-10 md:h-10" />, title: "Role-Based Access", desc: "Admin, Manager, and User roles with tailored views and permissions for each level." },
            { icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" />, title: "Reporting & Export", desc: "Export task data and generate performance reports for administrative review." },
            { icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10" />, title: "Follow-Up Comments", desc: "Built-in comment threads on tasks keep communication contextual and organised." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
              <div className="text-slate-700 mb-3 md:mb-4">{icon}</div>
              <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-16 md:w-24 h-1 bg-slate-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: 1, title: "Create Task", desc: "Admin or manager creates a task with title, description, priority, and deadline." },
              { step: 2, title: "Assign", desc: "Task is assigned to the relevant user or team with notifications sent automatically." },
              { step: 3, title: "Track Progress", desc: "Assignees update task status; managers monitor progress via the dashboard." },
              { step: 4, title: "Review & Close", desc: "Completed tasks are reviewed, follow-up comments added, and records archived." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">{step}</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} Task Scheduler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TaskScheduler;
