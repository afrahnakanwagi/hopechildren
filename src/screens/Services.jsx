import { FaCross, FaHandHoldingHeart, FaGraduationCap, FaPrayingHands, FaUsers, FaHome, FaUtensils, FaTshirt, FaHeartbeat, FaBookOpen, FaHandshake, FaGlobe } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

// Card slider settings
const cardSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />, // custom arrow
  prevArrow: <SamplePrevArrow />, // custom arrow
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  appendDots: dots => (
    <div style={{ marginTop: '48px' }}>
      <ul style={{ margin: '0px', display: 'flex', justifyContent: 'center' }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div style={{
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: '#f59e42',
      opacity: 0.5,
      transition: 'opacity 0.3s',
    }} />
  ),
};

// Custom Arrow Components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10, zIndex: 2, width: 40, height: 40, background: "#f59e42", borderRadius: "50%", boxShadow: "0 2px 8px #f59e4233", color: "white" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10, zIndex: 2, width: 40, height: 40, background: "#f59e42", borderRadius: "50%", boxShadow: "0 2px 8px #f59e4233", color: "white" }}
      onClick={onClick}
    />
  );
}

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

      {/* Services Card Slider */}
      <div className="pt-12 pb-32">
        <h2 className="text-3xl font-bold text-dark-800 mb-6 text-center">Our Services</h2>
        <div className="relative">
          <Slider {...{...cardSettings, dots: false}} className="modern-card-slider">
            {services.map((service, idx) => (
              <div key={service.title}>
                <div className="modern-card glass-card rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-3 hover:shadow-3xl group border-2" style={{animationDelay: `${idx * 0.1}s`, minHeight: 440, height: 440, margin: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderImage: 'linear-gradient(135deg, #f59e42 10%, #6dd5ed 90%) 1'}}>
                  <div>
                    <div className="mb-6 p-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full shadow-lg flex items-center justify-center glass-icon" style={{width: 80, height: 80, backdropFilter: 'blur(8px)', border: '2px solid #f59e42'}}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold text-dark-800 mb-2 group-hover:text-primary-600 transition-colors duration-300 tracking-tight" style={{letterSpacing: '-0.5px'}}>{service.title}</h3>
                    <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent" style={{letterSpacing: '0.2px'}}>{service.subtitle}</p>
                    <p className="text-dark-700 mb-4 leading-relaxed text-base font-medium" style={{minHeight: 60, color: 'rgba(30,30,40,0.85)'}}>{service.desc}</p>
                  </div>
                  <div className="w-full flex-1 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {service.details.map((detail, i) => (
                        <span key={i} className="bg-white/60 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold border border-primary-200 shadow-sm backdrop-blur-md" style={{backdropFilter: 'blur(2px)'}}>{detail}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* Custom Dots Below Cards */}
          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
            <ul className="slick-dots" id="services-slider-dots"></ul>
          </div>
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

<style jsx>{`
  .modern-card-slider .slick-arrow {
    opacity: 0.8;
    transition: opacity 0.3s, box-shadow 0.3s;
    background: linear-gradient(135deg, #f59e42 10%, #6dd5ed 90%);
    box-shadow: 0 4px 16px #f59e4233;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  .modern-card-slider:hover .slick-arrow {
    opacity: 1;
    box-shadow: 0 6px 24px #f59e4266;
  }
  .modern-card-slider .slick-dots li button:before {
    color: #f59e42;
    font-size: 18px;
    opacity: 0.5;
    transition: opacity 0.3s, color 0.3s;
  }
  .modern-card-slider .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #6dd5ed;
  }
  .glass-card {
    background: rgba(255,255,255,0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    border: 2px solid rgba(255,255,255,0.18);
    transition: box-shadow 0.4s, transform 0.4s;
  }
  .glass-card:hover {
    box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.18);
    transform: translateY(-8px) scale(1.03);
  }
  .glass-icon {
    background: rgba(255,255,255,0.5);
    box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.10);
    border: 2px solid #f59e42;
  }
`}</style>