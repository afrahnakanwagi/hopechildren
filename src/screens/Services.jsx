import { FaCross, FaHandHoldingHeart, FaGraduationCap, FaPrayingHands, FaUsers, FaHome, FaUtensils, FaTshirt, FaHeartbeat, FaBookOpen, FaHandshake, FaGlobe } from "react-icons/fa";

const services = [
  {
    icon: <FaCross className="text-4xl" />,
    title: "Gospel Outreach",
    subtitle: "Spreading the Word of God",
    desc: "Crusades, church support, and door-to-door evangelism to spread hope and faith throughout Uganda's communities.",
    details: [
      "Community crusades and revival meetings",
      "Church planting and support initiatives",
      "Door-to-door evangelism programs",
      "Bible study and discipleship training",
      "Youth ministry and spiritual guidance"
    ],
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl" />,
    title: "Humanitarian Aid",
    subtitle: "Meeting Basic Needs",
    desc: "Providing essential support including food, clothing, shelter, and healthcare to orphans, children, and the elderly.",
    details: [
      "Emergency food assistance programs",
      "Clothing and basic necessities distribution",
      "Shelter and housing support",
      "Healthcare access and medical care",
      "Clean water and sanitation projects"
    ],
    color: "from-secondary-500 to-secondary-600"
  },
  {
    icon: <FaGraduationCap className="text-4xl" />,
    title: "Women's Empowerment",
    subtitle: "Building Strong Communities",
    desc: "Education and training programs designed to uplift and empower women to become self-sufficient and community leaders.",
    details: [
      "Vocational skills training programs",
      "Business development and entrepreneurship",
      "Literacy and education initiatives",
      "Leadership development workshops",
      "Microfinance and economic support"
    ],
    color: "from-accent-500 to-accent-600"
  },
  {
    icon: <FaPrayingHands className="text-4xl" />,
    title: "Healing Ministries",
    subtitle: "Physical & Spiritual Wellness",
    desc: "Comprehensive healing programs addressing both physical and spiritual needs of individuals and communities.",
    details: [
      "Medical clinics and health screenings",
      "Mental health and counseling services",
      "Prayer and spiritual counseling",
      "Rehabilitation and recovery support",
      "Community health education"
    ],
    color: "from-success-500 to-success-600"
  },
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Orphan Care",
    subtitle: "Nurturing Young Lives",
    desc: "Comprehensive care and support for orphaned and vulnerable children, ensuring they have access to education and a loving environment.",
    details: [
      "Orphanage and foster care support",
      "Educational sponsorship programs",
      "Nutritional and health monitoring",
      "Psychosocial support and counseling",
      "Recreational and development activities"
    ],
    color: "from-warning-500 to-warning-600"
  },
  {
    icon: <FaHeartbeat className="text-4xl" />,
    title: "Elderly Care",
    subtitle: "Honoring Our Elders",
    desc: "Dedicated programs to support and care for elderly community members, ensuring they live with dignity and respect.",
    details: [
      "Elderly care facilities and support",
      "Healthcare and medical assistance",
      "Social activities and companionship",
      "Nutrition and dietary support",
      "Family reunification programs"
    ],
    color: "from-primary-500 to-accent-500"
  }
];

const impactStats = [
  { number: "500+", label: "Children Educated", icon: <FaBookOpen /> },
  { number: "50+", label: "Elderly Cared For", icon: <FaHeartbeat /> },
  { number: "100+", label: "Women Empowered", icon: <FaGraduationCap /> },
  { number: "25+", label: "Communities Served", icon: <FaGlobe /> }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assests/children2.png)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Comprehensive programs designed to transform lives through the love of Jesus Christ.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                <FaHandshake className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Our Mission</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed text-center">
              <p className="text-xl mb-6">
                To share the love of Jesus Christ through comprehensive outreach programs that address the physical, spiritual, and emotional needs of Uganda's most vulnerable communities.
              </p>
              <p className="text-lg">
                We believe in a holistic approach to ministry, combining Gospel outreach with practical humanitarian aid to create lasting transformation in the lives of orphans, vulnerable children, the elderly, and women in need.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">
            How We <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Our comprehensive programs are designed to meet the diverse needs of the communities we serve, 
            from immediate humanitarian aid to long-term development initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.title} 
              className="bg-white rounded-3xl shadow-large p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white shadow-medium`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-800 mb-2">{service.title}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-dark-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-dark-800 mb-3">What We Provide:</h4>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-dark-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Through our comprehensive services, we have made a significant difference in the lives of countless individuals and communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-large p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-dark-600 mb-8 leading-relaxed">
            Your support enables us to continue providing these essential services to communities in need. 
            Whether through donations, volunteering, or partnerships, every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-2xl text-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="bg-transparent text-primary-600 py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-primary-50 transition-all duration-300 border-2 border-primary-300 hover:border-primary-500"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}