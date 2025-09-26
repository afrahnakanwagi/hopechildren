import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaHandsHelping, FaPhone, FaPlay, FaArrowRight, FaStar, FaPrayingHands, FaLightbulb, FaGlobe, FaShieldAlt, FaHandshake, FaSmile, FaBookOpen, FaHome, FaChurch } from "react-icons/fa";

const images = [
  "/assests/chi1.jpg",
  "/assests/chi2.jpg",
  "/assests/child.jpg",
  "/assests/child1.jpg",
  "/assests/child2.jpg",
  "/assests/child3.jpg",
];

const impactStats = [
  { number: "Care & Support", label: "Children receiving care", icon: FaHeart, color: "text-primary-600", bgColor: "bg-gradient-to-br from-primary-50 to-primary-100" },
  { number: "Dignity & Care", label: "Elderly supported with dignity", icon: FaHandHoldingHeart, color: "text-secondary-600", bgColor: "bg-gradient-to-br from-secondary-50 to-secondary-100" },
  { number: "Skills & Hope", label: "Women empowered through training", icon: FaUsers, color: "text-success-600", bgColor: "bg-gradient-to-br from-success-50 to-success-100" },
  { number: "Since 2020", label: "Faithful service", icon: FaStar, color: "text-accent-600", bgColor: "bg-gradient-to-br from-accent-50 to-accent-100" },
];

const services = [
  {
    title: "Child Care & Education",
    desc: "Providing comprehensive education, healthcare, and emotional support to vulnerable children, ensuring they have the foundation for a brighter future.",
    icon: <FaGraduationCap className="text-5xl" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    features: ["Education Support", "Healthcare Access", "Emotional Care"],
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Elderly Support",
    desc: "Caring for the elderly with dignity, respect, and practical assistance, ensuring they live their golden years with comfort and purpose.",
    icon: <FaHandHoldingHeart className="text-5xl" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    features: ["Healthcare Services", "Social Activities", "Basic Needs"],
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "Women Empowerment",
    desc: "Empowering women through skills training, education, and economic opportunities to build sustainable livelihoods and stronger families.",
    icon: <FaUsers className="text-5xl" />,
    color: "from-green-500 to-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
    features: ["Skills Training", "Economic Support", "Leadership Development"],
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Community Outreach",
    desc: "Building stronger communities through faith-based programs, support networks, and sustainable development initiatives.",
    icon: <FaHandsHelping className="text-5xl" />,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    features: ["Faith Programs", "Community Support", "Development Projects"],
    gradient: "from-orange-400 to-orange-600",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Beneficiary",
    text: "Hope Children gave my family a second chance. They provided education for my children and hope for our future. The love and support we received changed everything.",
    rating: 5,
    avatar: "SM",
    story: "Single mother of 3",
  },
  {
    name: "John K.",
    role: "Community Leader",
    text: "The impact this organization has had on our community is incredible. They truly live their mission and have transformed countless lives through their dedication.",
    rating: 5,
    avatar: "JK",
    story: "Local church leader",
  },
  {
    name: "Mary W.",
    role: "Volunteer",
    text: "Being part of this mission has changed my life. The love and dedication here is inspiring. Every day I see the difference we make in people's lives.",
    rating: 5,
    avatar: "MW",
    story: "Volunteer for 2 years",
  },
];

const values = [
  {
    title: "Faith-Based",
    desc: "Rooted in Christian values and the Gospel of Jesus Christ",
    icon: <FaChurch className="text-4xl" />,
    color: "from-primary-400 to-primary-600",
  },
  {
    title: "Compassionate",
    desc: "Serving with love, empathy, and understanding",
    icon: <FaHeart className="text-4xl" />,
    color: "from-secondary-400 to-secondary-600",
  },
  {
    title: "Sustainable",
    desc: "Creating lasting change through community development",
    icon: <FaGlobe className="text-4xl" />,
    color: "from-success-400 to-success-600",
  },
  {
    title: "Transparent",
    desc: "Maintaining trust through open communication",
    icon: <FaShieldAlt className="text-4xl" />,
    color: "from-accent-400 to-accent-600",
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    dotsClass: "slick-dots !bottom-8",
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .hero-section {
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          max-height: 1200px;
        }
        @media (max-width: 640px) {
          .hero-section {
            background-size: contain;
            background-repeat: no-repeat;
            min-height: 60vh;
          }
        }
      `}</style>

      {/* Hero Section */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div
              className="hero-section relative"
              style={{ backgroundImage: `url(${src})` }}
            >
              {/* Enhanced Multi-Layer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary-900/90"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
              
              {/* Animated Background Elements */}
              <div className="absolute top-20 left-10 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-500/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-success-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-7xl mx-auto">
                  {/* Enhanced Badge */}
                  <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl text-white px-8 py-4 rounded-full mb-12 border border-white/30 shadow-2xl animate-fade-in-down">
                    <FaPrayingHands className="text-primary-300 animate-pulse" />
                    <span className="font-semibold text-lg">Serving the world since 2020</span>
                    <div className="w-2 h-2 bg-primary-300 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Enhanced Main Heading */}
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-10 text-white leading-tight md:leading-none tracking-tight">
                    <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
                      Bringing Hope
                    </span>
                    <br />
                    <span className="text-white drop-shadow-2xl relative">
                      to the Hopeless
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
                    </span>
                  </h1>
                  
                  {/* Enhanced Subtitle */}
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl md:max-w-5xl mx-auto mb-8 md:mb-16 text-white/95 drop-shadow-xl leading-relaxed font-light">
                    We serve orphans, vulnerable children, the elderly, and women in need across the world, 
                    <span className="text-primary-200 font-semibold"> rooted in the Gospel of our Lord Jesus Christ.</span>
                  </p>
                  
                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-28 pb-8 md:pb-0 z-20 relative">
                    <Link
                      to="/donate"
                      className="group relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-6 px-12 rounded-3xl text-2xl font-bold shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/30"
                      style={{ minWidth: '220px' }}
                    >
                      <span className="relative flex items-center gap-4">
                        <FaHeart className="group-hover:animate-pulse" />
                        Donate Now
                        <FaArrowRight />
                      </span>
                    </Link>
                    <Link
                      to="/about"
                      className="group bg-white/20 backdrop-blur-xl text-white py-6 px-12 rounded-3xl text-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white/30"
                      style={{ minWidth: '220px' }}
                    >
                      <span className="flex items-center gap-4">
                        <FaPlay className="text-primary-300" />
                        Learn Our Story
                      </span>
                    </Link>
                  </div>
                  
                  {/* Enhanced Scroll Indicator */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
                      <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative">
                        <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
                        <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Enhanced Impact Stats Section */}
      <div className="relative z-20 -mt-12 pb-0">
        <div className="max-w-8xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-4xl shadow-3xl border border-white/50 p-12 md:p-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-dark-800 mb-6">
                  Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Impact</span>
                </h2>
                <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
                  Transforming lives through faith, love, and dedicated service across the world
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {impactStats.map((stat, idx) => (
                  <div 
                    key={stat.label}
                    className={`${stat.bgColor} rounded-3xl p-8 text-center group hover:transform hover:scale-110 transition-all duration-700 shadow-xl hover:shadow-2xl border border-white/50`}
                    style={{animationDelay: `${idx * 0.2}s`}}
                  >
                    <div className={`text-5xl md:text-6xl font-black mb-4 ${stat.color} group-hover:scale-125 transition-transform duration-500`}>
                      {stat.number}
                    </div>
                    <div className="text-dark-700 font-semibold text-lg mb-4">{stat.label}</div>
                    <div className={`text-3xl ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110`}>
                      <stat.icon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Section */}
      <div className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-secondary-50/20"></div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-dark-800 mb-8">
              How We <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-2xl text-dark-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive approach addresses the physical, spiritual, and emotional needs 
              of the world's most vulnerable communities through dedicated programs and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={service.title}
                className={`${service.bgColor} rounded-4xl p-10 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 group cursor-pointer border border-white/50 relative overflow-hidden`}
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`${service.iconColor} mb-8 group-hover:scale-125 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black text-dark-800 mb-6">{service.title}</h3>
                <p className="text-dark-600 mb-8 leading-relaxed text-lg">{service.desc}</p>
                
                {/* Features List */}
                <div className="mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 mb-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-dark-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.color} text-white py-4 px-8 rounded-2xl font-bold hover:shadow-xl transition-all duration-500 transform hover:scale-105`}
                >
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/50 to-secondary-700/50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-success-400"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Stories of <span className="text-accent-300">Transformation</span>
            </h2>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Real stories from our community showing the impact of hope, love, and faith in action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-2xl rounded-4xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl group"
                style={{animationDelay: `${idx * 0.3}s`}}
              >
                <div className="flex gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                
                <p className="text-white/95 mb-8 leading-relaxed text-lg italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl">{testimonial.name}</div>
                    <div className="text-white/70 text-lg">{testimonial.role}</div>
                    <div className="text-white/50 text-sm">{testimonial.story}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Values Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-dark-800 mb-8">
              Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-2xl text-dark-600 max-w-4xl mx-auto leading-relaxed">
              The principles that guide our mission and shape our impact in the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div 
                key={value.title}
                className="bg-white rounded-4xl p-10 text-center shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 group border border-gray-100"
                style={{animationDelay: `${idx * 0.2}s`}}
              >
                <div className={`text-${value.color.split('-')[1]}-600 mb-6 group-hover:scale-125 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-dark-800 mb-4">{value.title}</h3>
                <p className="text-dark-600 leading-relaxed text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-60 h-60 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10">
            Join Us in Making a <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Difference</span>
          </h2>
          <p className="text-2xl text-white/90 mb-16 leading-relaxed max-w-5xl mx-auto">
            Every donation, prayer, and partnership helps us bring hope to more families in Uganda. 
            Together, we can transform lives through the love of Christ and create lasting change in our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Link
              to="/donate"
              className="group relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-7 px-16 rounded-3xl text-2xl font-black hover:from-primary-600 hover:to-secondary-600 transition-all duration-700 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-shimmer"></div>
              <span className="relative flex items-center gap-4">
                <FaHeart className="group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
                Make a Donation
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link
              to="/contact"
              className="group bg-transparent text-white py-7 px-16 rounded-3xl text-2xl font-bold hover:bg-white/10 transition-all duration-700 border-3 border-white/30 hover:border-white/60 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-4">
                <FaPhone className="text-primary-300 group-hover:scale-110 transition-transform duration-300" />
                Get Involved
              </span>
            </Link>
          </div>
          
          <div className="text-white/70 text-lg">
            <p className="mb-6">Your support makes a real difference in the lives of vulnerable children and families.</p>
            <div className="flex justify-center items-center gap-8 text-3xl mb-8">
              <FaSmile className="text-accent-300 animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer" />
              <FaHandshake className="text-success-300 animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '0.5s'}} />
              <FaBookOpen className="text-primary-300 animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1s'}} />
              <FaHome className="text-secondary-300 animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1.5s'}} />
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-white/90 text-center font-medium">
                "For I was hungry and you gave me food, I was thirsty and you gave me drink, 
                I was a stranger and you welcomed me." - Matthew 25:35
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
