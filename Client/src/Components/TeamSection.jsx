import PropTypes from 'prop-types';

const TeamSection = ({ members, projectName, accentColor = 'purple' }) => {
  const colorMap = {
    purple: 'bg-purple-600 hover:text-purple-300',
    violet: 'bg-violet-600 hover:text-violet-300',
    blue: 'bg-blue-600 hover:text-blue-300',
    indigo: 'bg-indigo-700 hover:text-indigo-300',
    emerald: 'bg-emerald-600 hover:text-emerald-300',
    amber: 'bg-amber-600 hover:text-amber-300',
    rose: 'bg-rose-600 hover:text-rose-300',
    teal: 'bg-teal-600 hover:text-teal-300',
    slate: 'bg-slate-600 hover:text-slate-300',
    pink: 'bg-pink-600 hover:text-pink-300',
  };

  const accent = colorMap[accentColor] || colorMap.purple;
  const barClass = accent.split(' ')[0]; // e.g. "bg-purple-600"
  const hoverLinkClass = accent.split(' ').slice(1).join(' '); // e.g. "hover:text-purple-300"

  const roleColorMap = {
    purple: 'text-purple-600',
    violet: 'text-violet-600',
    blue: 'text-blue-600',
    indigo: 'text-indigo-700',
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
    teal: 'text-teal-600',
    slate: 'text-slate-600',
    pink: 'text-pink-600',
  };
  const roleColor = roleColorMap[accentColor] || roleColorMap.purple;

  // Determine grid columns based on member count
  const getGridCols = (count) => {
    if (count <= 2) return 'grid-cols-1 sm:grid-cols-2 max-w-2xl';
    if (count <= 3) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl';
    if (count <= 4) return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-w-5xl';
    return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <div className={`w-16 md:w-24 h-1 ${barClass} mx-auto rounded-full mb-4 md:mb-6`}></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          The talented professionals who contributed to develop {projectName}
        </p>
      </div>

      <div className={`grid ${getGridCols(members.length)} gap-4 sm:gap-6 md:gap-8 mx-auto`}>
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden group">
            <div className="relative overflow-hidden h-48 sm:h-52">
              {member.imageUrl ? (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white ${hoverLinkClass} transition-colors`}
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white ${hoverLinkClass} transition-colors`}
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-base md:text-lg text-gray-900">{member.name}</h3>
              <p className={`${roleColor} font-medium text-sm md:text-base`}>{member.role}</p>
              <p className="text-gray-600 text-xs md:text-sm">{member.specialty}</p>
              {member.badges && member.badges.length > 0 && (
                <div className="flex justify-center space-x-1 mt-2">
                  {member.badges.map((badge, badgeIndex) => (
                    <img
                      key={badgeIndex}
                      src={badge}
                      alt="Badge"
                      className="w-5 h-5 md:w-6 md:h-6"
                      title="Project Badge"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TeamSection.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    specialty: PropTypes.string,
    imageUrl: PropTypes.string,
    badges: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    linkedin: PropTypes.string,
  })).isRequired,
  projectName: PropTypes.string.isRequired,
  accentColor: PropTypes.string,
};

export default TeamSection;
