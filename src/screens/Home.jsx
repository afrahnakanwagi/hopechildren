import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaHandsHelping, FaPhone } from "react-icons/fa";

const images = [
  "/assests/children1.png",
  "/assests/children2.png",
  "/assests/children3.png",
  "/assests/elderly1.png",
  "/assests/child.jpg",
  "/assests/child1.jpg",
  "/assests/child2.jpg",
  "/assests/child3.jpg",
];

const sections = [
  {
    title: "Our Story",
    desc: "Discover our journey from faith to action, bringing hope to Uganda's most vulnerable.",
    icon: <FaHeart className="text-4xl text-primary-500" />,
    link: "/about",
    btn: "Learn More",
    color: "from-primary-50 to-primary-100",
  },
  {
    title: "Our Mission",
    desc: "Explore our comprehensive services and outreach programs that transform lives.",
    icon: <FaHandHoldingHeart className="text-4xl text-secondary-500" />,
    link: "/services",
    btn: "See Services",
    color: "from-secondary-50 to-secondary-100",
  },
  {
    title: "Our Impact",
    desc: "See the real stories and achievements that demonstrate our commitment to change.",
    icon: <FaUsers className="text-4xl text-success-500" />,
    link: "/blog",
    btn: "View Stories",
    color: "from-success-50 to-success-100",
  },
  {
    title: "Photo Gallery",
    desc: "Browse through moments of hope, joy, and transformation in our community.",
    icon: <FaGraduationCap className="text-4xl text-accent-500" />,
    link: "/gallery",
    btn: "See Gallery",
    color: "from-accent-50 to-accent-100",
  },
  {
    title: "Future Projects",
    desc: "Learn about our vision and long-term goals for sustainable community development.",
    icon: <FaHandsHelping className="text-4xl text-warning-500" />,
    link: "/projects",
    btn: "Our Projects",
    color: "from-warning-50 to-warning-100",
  },
  {
    title: "Get Involved",
    desc: "Join our mission through volunteering, partnerships, or direct support.",
    icon: <FaPhone className="text-4xl text-primary-500" />,
    link: "/contact",
    btn: "Contact Us",
    color: "from-primary-50 to-secondary-50",
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    dotsClass: "slick-dots !bottom-8",
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Slider */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div
              className="min-h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark-800/60 to-primary-900/70"></div>
              <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
              
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-5xl mx-auto animate-fade-in-up">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
                    <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                      Bringing Hope
                    </span>
                    <br />
                    <span className="text-white">to the Hopeless</span>
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-10 text-white/90 drop-shadow-lg leading-relaxed">
                    We serve orphans, vulnerable children, the elderly, and women in need across Uganda, 
                    rooted in the Gospel of our Lord Jesus Christ.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/donate"
                      className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-2xl text-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
                    >
                      <span className="flex items-center gap-2">
                        <FaHeart className="group-hover:animate-pulse" />
                        Donate Now
                      </span>
                    </Link>
                    <Link
                      to="/about"
                      className="group bg-white/10 backdrop-blur-md text-white py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                    >
                      Learn Our Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Stats Section */}
      <div className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-dark-600 font-medium">Children Helped</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">50+</div>
                <div className="text-dark-600 font-medium">Elderly Supported</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl md:text-4xl font-bold text-success-600 mb-2">100+</div>
                <div className="text-dark-600 font-medium">Women Empowered</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">4</div>
                <div className="text-dark-600 font-medium">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Previews */}
      <div className="relative z-10 bg-gradient-to-b from-white via-primary-50/30 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">
              How We <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses the physical, spiritual, and emotional needs of Uganda's most vulnerable communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div 
                key={section.title} 
                className={`bg-gradient-to-br ${section.color} rounded-3xl shadow-medium p-8 flex flex-col items-center text-center hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="mb-6 p-4 bg-white rounded-2xl shadow-soft">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-4">{section.title}</h3>
                <p className="text-dark-600 mb-6 leading-relaxed">{section.desc}</p>
                <Link
                  to={section.link}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:scale-105"
                >
                  {section.btn}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Every donation, prayer, and partnership helps us bring hope to more families in Uganda. 
            Together, we can transform lives through the love of Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
            >
              Make a Donation
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
