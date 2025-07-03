import { FaGraduationCap, FaHome, FaHeartbeat, FaCross, FaBookOpen, FaHandsHelping, FaUsers, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const currentProjects = [
  {
    icon: <FaGraduationCap />,
    title: "Education Sponsorship Program",
    status: "Active",
    description: "Providing school fees, uniforms, books, and supplies for children who cannot afford education.",
    impact: "500+ children currently supported",
    progress: 85,
    color: "from-primary-500 to-primary-600",
    details: [
      "School fees for primary and secondary education",
      "Educational supplies and textbooks",
      "School uniforms and shoes",
      "Transportation assistance",
      "Academic support and tutoring"
    ]
  },
  {
    icon: <FaHome />,
    title: "Emergency Housing Initiative",
    status: "Active",
    description: "Building and repairing homes for families living in unsafe or inadequate housing conditions.",
    impact: "25 homes built/repaired",
    progress: 60,
    color: "from-secondary-500 to-secondary-600",
    details: [
      "Safe and durable housing construction",
      "Home repairs and improvements",
      "Sanitation facilities",
      "Clean water access",
      "Community infrastructure development"
    ]
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare Access Program",
    status: "Active",
    description: "Providing medical care, health screenings, and medication for vulnerable individuals.",
    impact: "200+ people treated annually",
    progress: 75,
    color: "from-success-500 to-success-600",
    details: [
      "Medical clinics and health screenings",
      "Medication and treatment support",
      "Maternal and child healthcare",
      "Mental health counseling",
      "Health education and prevention"
    ]
  }
];

const futureProjects = [
  {
    icon: <FaGraduationCap />,
    title: "Vocational Training Centers",
    status: "Planning",
    description: "Establish centers that empower women with practical skills, enabling them to build sustainable livelihoods.",
    timeline: "2025-2026",
    budget: "₦50,000,000",
    color: "from-accent-500 to-accent-600",
    details: [
      "Skills training in tailoring, cooking, and crafts",
      "Business development and entrepreneurship",
      "Financial literacy and savings programs",
      "Market access and networking",
      "Ongoing mentorship and support"
    ],
    benefits: [
      "Economic empowerment for women",
      "Reduced poverty in communities",
      "Increased family income",
      "Skills transfer to next generation",
      "Community development and growth"
    ]
  },
  {
    icon: <FaHome />,
    title: "Rehabilitation Center for Girls",
    status: "Planning",
    description: "Building a safe haven for girls who have experienced abuse, providing shelter, education, and emotional support.",
    timeline: "2026-2027",
    budget: "₦75,000,000",
    color: "from-warning-500 to-warning-600",
    details: [
      "Safe and secure residential facilities",
      "Trauma-informed counseling services",
      "Educational programs and life skills",
      "Medical and psychological care",
      "Reintegration support and family reunification"
    ],
    benefits: [
      "Protection for vulnerable girls",
      "Healing and recovery support",
      "Education and skill development",
      "Safe reintegration into society",
      "Breaking cycles of abuse and poverty"
    ]
  },
  {
    icon: <FaHeartbeat />,
    title: "Addiction Treatment Center",
    status: "Planning",
    description: "Launch a center dedicated to helping youth affected by drugs and alcohol, offering counseling and spiritual guidance.",
    timeline: "2027-2028",
    budget: "₦60,000,000",
    color: "from-purple-500 to-purple-600",
    details: [
      "Medical detoxification and treatment",
      "Individual and group counseling",
      "Spiritual guidance and prayer support",
      "Life skills and vocational training",
      "Aftercare and relapse prevention"
    ],
    benefits: [
      "Recovery and rehabilitation for youth",
      "Reduced drug-related crime",
      "Family restoration and healing",
      "Community safety improvement",
      "Long-term positive impact on society"
    ]
  },
  {
    icon: <FaCross />,
    title: "Gospel Outreach Expansion",
    status: "Planning",
    description: "Expanding our reach to share the Gospel and support more communities through crusades and evangelism.",
    timeline: "2025-2028",
    budget: "₦30,000,000",
    color: "from-primary-500 to-accent-500",
    details: [
      "Community crusades and revival meetings",
      "Church planting and support initiatives",
      "Door-to-door evangelism programs",
      "Bible study and discipleship training",
      "Youth ministry and spiritual guidance"
    ],
    benefits: [
      "Spiritual transformation in communities",
      "Increased church attendance and growth",
      "Stronger faith communities",
      "Moral and ethical development",
      "Hope and purpose restoration"
    ]
  }
];

const projectStats = [
  { number: "3", label: "Active Projects", icon: <FaHandsHelping /> },
  { number: "4", label: "Future Projects", icon: <FaGlobe /> },
  { number: "₦215M", label: "Total Budget Needed", icon: <FaDollarSign /> },
  { number: "4", label: "Years Timeline", icon: <FaCalendarAlt /> }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assests/children2.png)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Building a brighter future for Uganda, one project at a time through sustainable development and community transformation.
          </p>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                <FaGlobe className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Project Overview</h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto">
                Our comprehensive project portfolio addresses the most pressing needs in Uganda's vulnerable communities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white"><FaHandsHelping /></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-dark-800 mb-2">3</div>
                <div className="text-dark-600 font-medium">Active Projects</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white"><FaGlobe /></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-dark-800 mb-2">4</div>
                <div className="text-dark-600 font-medium">Future Projects</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white"><FaDollarSign /></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-dark-800 mb-2">₦215M</div>
                <div className="text-dark-600 font-medium">Total Budget Needed</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white"><FaCalendarAlt /></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-dark-800 mb-2">4</div>
                <div className="text-dark-600 font-medium">Years Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">
            Current <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            These are the projects we're actively working on to bring immediate relief and support to communities in need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div key={project.title} className="bg-white rounded-3xl shadow-large p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center`}>
                  <div className="text-2xl text-white">{project.icon}</div>
                </div>
                <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-semibold">
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-dark-800 mb-3">{project.title}</h3>
              <p className="text-dark-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm text-dark-600 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-dark-800 mb-3">Impact:</h4>
                <p className="text-primary-600 font-medium">{project.impact}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-dark-800 mb-3">What We Provide:</h4>
                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-dark-600 text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Projects */}
      <div className="bg-gradient-to-br from-dark-50 to-dark-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">
              Future <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Our ambitious plans to expand our impact and reach even more communities in need through sustainable development initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {futureProjects.map((project, index) => (
              <div key={project.title} className="bg-white rounded-3xl shadow-large p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center`}>
                    <div className="text-2xl text-white">{project.icon}</div>
                  </div>
                  <span className="px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-dark-800 mb-3">{project.title}</h3>
                <p className="text-dark-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCalendarAlt className="text-primary-500" />
                      <span className="font-semibold text-dark-800">Timeline</span>
                    </div>
                    <p className="text-dark-600">{project.timeline}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaDollarSign className="text-primary-500" />
                      <span className="font-semibold text-dark-800">Budget</span>
                    </div>
                    <p className="text-dark-600">{project.budget}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark-800 mb-3">Project Details:</h4>
                    <ul className="space-y-2">
                      {project.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-dark-600 text-sm">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800 mb-3">Expected Benefits:</h4>
                    <ul className="space-y-2">
                      {project.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-dark-600 text-sm">
                          <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Support Our Projects
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Your generous support enables us to continue our current projects and bring our future vision to life. 
            Every contribution makes a lasting impact in the communities we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 