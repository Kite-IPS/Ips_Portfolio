import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaRocket, FaUsers, FaClipboardList, FaBullseye, FaCode, FaStar } from 'react-icons/fa';
import Footer from '../../Components/Footer';

const Internship = () => {
    const navigate = useNavigate();

    const benefits = [
        { icon: <FaCode className="text-2xl" />, title: 'Real-World Projects', description: 'Takes a real world problem statement and analyse the methodologies to obtain more efficient solution to solve the problem' },
        { icon: <FaUsers className="text-2xl" />, title: 'Mentorship & Guidance', description: 'Get connected with experienced community members who give guidance through the learning journey.' },
        { icon: <FaStar className="text-2xl" />, title: 'Skill Development', description: 'Master modern tech stacks, tools, and industry best practices through hands-on practice.' },
        { icon: <FaRocket className="text-2xl" />, title: 'Portfolio Building', description: 'Build an impressive portfolio on what they practiced and built with contributions to open-source, community-driven projects and individual projects that help with upskilling.' },
        { icon: <FaClipboardList className="text-2xl" />, title: 'Certificate of Completion', description: 'Receive an official certificate recognizing your contributions and accomplishments.' },
        { icon: <FaBullseye className="text-2xl" />, title: 'Networking Opportunities', description: 'Connect with like-minded peers, alumni, and industry professionals within the community.' },
    ];

    const tddSteps = [
        { step: '01', title: 'Write a Test', description: 'Define expected behavior by writing a test case before any implementation code.' },
        { step: '02', title: 'Run & See It Fail', description: 'Execute the test to confirm it fails — this validates the test itself is meaningful.' },
        { step: '03', title: 'Write Minimal Code', description: 'Implement just enough code to make the failing test pass. No more, no less.' },
        { step: '04', title: 'Run & See It Pass', description: 'Execute the test again to confirm your implementation satisfies the requirement.' },
        { step: '05', title: 'Refactor & Repeat', description: 'Clean up your code while keeping all tests green, then move to the next feature.' },
    ];

    const rules = [
        'Maintain professional conduct and respect all community members.',
        'Attend scheduled meetings, stand-ups, and review sessions consistently.',
        'Follow Git workflows — use branches, pull requests, and meaningful commit messages.',
        'Write clean, documented blog, and testable code following project conventions.',
        'Communicate blockers early and seek help proactively through designated channels.',
        'Complete assigned tasks within agreed-upon timelines.',
        'Respect intellectual property and maintain confidentiality of project details.',
        'Actively participate in code reviews — both giving and receiving feedback.',
    ];

    const futureGoals = [
        { title: 'Industry Partnerships', description: 'Collaborate with tech companies to offer real internship pipelines and placement opportunities for community members.' },
        { title: 'Open-Source Contributions', description: 'Establish IPS as a recognized contributor in the global open-source ecosystem.' },
        { title: 'Research & Innovation Labs', description: 'Launch dedicated labs for AI, IoT, and emerging technology research driven by student-interns.' },
        { title: 'Career Support', description: 'Provide students with opportunities, mentorship, and resources to prepare for internships and placements.' },
    ];

    return (
        <div className="bg-white font-primary">
            {/* Navigation Bar */}
            <nav className="w-full h-[80px] flex px-4 md:px-10 justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-blue-600 font-semibold text-lg">Back to Home</span>
                </div>
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl mokoto-text">IPS Internship</h1>
                <button
                    className="text-white px-4 py-2 rounded-lg bg-blue-600 font-medium cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                    onClick={() => navigate('/join-community')}
                >
                    Join Community
                </button>
            </nav>

            {/* Hero Section */}
            <section className="min-h-[90vh] pt-[80px] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                        NOW ACCEPTING APPLICATIONS
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mokoto-text leading-tight">
                        Intern at <br className="sm:hidden" />IPS Tech
                    </h1>
                    <p className="text-blue-100 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                        Kickstart your tech career by working on real-world projects, learning from experienced mentors, and becoming part of a thriving developer community.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/join-community')}
                            className="bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl flex items-center gap-2 text-lg"
                        >
                            Apply Now <FaArrowRight />
                        </button>
                        <a
                            href="#why-join"
                            className="border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Join IPS as an Intern */}
            <section id="why-join" className="py-20 md:py-28 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mokoto-text">
                            Why Join IPS as an Intern?
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                            IPS Tech Community isn't just another club — it's a launchpad for your career. Here's why students choose to intern with us.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">Learn by Doing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We believe the best way to learn is through practice. As an intern, you'll be embedded in active project teams, writing code that ships to real users — not toy projects that sit in a folder.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">Community-Driven Growth</h3>
                            <p className="text-gray-600 leading-relaxed">
                                You'll work alongside passionate developers who share knowledge freely. Code reviews, pair programming sessions, and tech talks ensure you grow faster than going solo.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">Industry-Ready Skills</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From Git workflows and CI/CD to agile methodologies and TDD, you'll gain the exact skills recruiters look for — before you even graduate.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">A Proven Track Record</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Past interns have gone on to lead projects, organize hackathons, and secure roles at top companies. Your journey at IPS is the start of something bigger.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-28 bg-gray-50 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mokoto-text">
                            Benefits of Interning at IPS
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                            We invest in our interns because your success is our success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intern to Member */}
            <section className="py-20 md:py-28 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mokoto-text">
                            Intern to Member
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                            Your internship is the gateway to becoming a full community member.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Timeline */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-blue-200 top-0 bottom-0 rounded-full"></div>
                        {[
                            { phase: 'Phase 1', title: 'Onboarding', description: 'Get introduced to the community, meet your mentor, set up your development domain, and understand the domain-based project landscape.', align: 'right' },
                            { phase: 'Phase 2', title: 'Active Contribution', description: 'Start working with the domain, participate in code reviews, presentation, attend stand-ups, and learn team workflows through hands-on involvement.', align: 'left' },
                            { phase: 'Phase 3', title: 'Ownership & Impact', description: 'Take ownership of features or modules, lead small initiatives, mentor newer interns, and demonstrate consistent quality contributions.', align: 'right' },
                            { phase: 'Phase 4', title: 'Full Membership', description: 'Upon successful completion, receive your certificate and transition into a full community member with voting rights, project leads access, and more.', align: 'left' },
                        ].map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-12 ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`w-full md:w-[45%] ${item.align === 'left' ? 'md:text-right md:pl-0 md:pr-8' : 'md:text-left md:pr-0 md:pl-8'}`}>
                                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                                        <span className="text-sm font-bold text-blue-600 tracking-wider">{item.phase}</span>
                                        <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-10 h-10 bg-blue-600 text-white rounded-full items-center justify-center font-bold text-sm z-10 shrink-0 shadow-lg">
                                    {index + 1}
                                </div>
                                <div className="hidden md:block w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rules & Regulations */}
            <section className="py-20 md:py-28 bg-gray-50 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mokoto-text">
                            Rules & Regulations
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                            A few guidelines to ensure a productive and respectful environment for everyone.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                        {rules.map((rule, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-4 px-6 sm:px-8 py-5 ${index !== rules.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50/50 transition-colors duration-200`}
                            >
                                <FaCheckCircle className="text-blue-600 mt-1 shrink-0 text-lg" />
                                <p className="text-gray-700 leading-relaxed">{rule}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Test Driven Development */}
            <section className="py-20 md:py-28 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mokoto-text">
                            Test Driven Development
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                            At IPS, we follow TDD as a core practice. Every intern learns to write tests first and code second.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {tddSteps.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-gradient-to-b from-blue-600 to-indigo-700 text-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
                            >
                                <span className="text-4xl font-bold opacity-20 absolute top-3 right-4 mokoto-text">{item.step}</span>
                                <div className="mt-6">
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 text-center">
                        <p className="text-blue-800 font-semibold text-lg">
                            "Code without tests is legacy code. At IPS, we build for the future."
                        </p>
                    </div>
                </div>
            </section>

            {/* Future Goals */}
            <section className="py-20 md:py-28 bg-gray-50 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mokoto-text">
                            Future Goals
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                            Where we're headed — and how interns will help us get there.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {futureGoals.map((goal, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">{goal.title}</h3>
                                </div>
                                <p className="text-gray-500 leading-relaxed">{goal.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 text-center py-16 md:py-20 px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Begin Your Journey?
                </h2>
                <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                    Join IPS Tech Community as an intern and take the first step toward building something meaningful.
                </p>
                <button
                    onClick={() => navigate('/join-community')}
                    className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl text-lg inline-flex items-center gap-2"
                >
                    Apply Now <FaArrowRight />
                </button>
            </section>

            <Footer />
        </div>
    );
};

export default Internship;
