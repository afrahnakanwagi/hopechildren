import { Link } from "react-router-dom";
import { 
  FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaHandsHelping, 
  FaPhone, FaArrowRight, FaGlobe, FaShieldAlt, FaHandshake, FaHome, 
  FaChurch, FaCross, FaUniversity, FaGift, FaTruckMoving, FaLandmark, FaEnvelope 
} from "react-icons/fa";

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

const donationAreas = [
  {
    title: "Education Support",
    desc: "Help provide quality education to orphans and children from needy families",
    icon: <FaGraduationCap className="text-4xl" />,
    color: "from-primary-500 to-primary-600",
    bgColor: "bg-gradient-to-br from-primary-50 to-primary-100"
  },
  {
    title: "Healthcare Services",
    desc: "Provide quality healthcare for children and elders in needy families",
    icon: <FaHeart className="text-4xl" />,
    color: "from-secondary-500 to-secondary-600",
    bgColor: "bg-gradient-to-br from-secondary-50 to-secondary-100"
  },
  {
    title: "Basic Needs",
    desc: "Provide clothing and basic necessities to vulnerable families",
    icon: <FaHome className="text-4xl" />,
    color: "from-success-500 to-success-600",
    bgColor: "bg-gradient-to-br from-success-50 to-success-100"
  },
  {
    title: "Gospel Outreach",
    desc: "Support crusades, church programs, and door-to-door evangelism",
    icon: <FaCross className="text-4xl" />,
    color: "from-accent-500 to-accent-600",
    bgColor: "bg-gradient-to-br from-accent-50 to-accent-100"
  }
];

const contactInfo = [
  {
    name: "Katiiti Joyce",
    role: "CEO",
    phone: "+1 (781) 330-2611",
    email: "katiitijoyce@gmail.com"
  },
  {
    name: "Nakimera Lilian",
    role: "H/R",
    phone: "+256 701 342803",
    email: "liliannakimera64@gmail.com"
  },
  {
    name: "Edith Mbekeka",
    role: "Coordinator",
    phone: "+256 766613051",
    email: "hope@hopechristianfoundation.co.site"
  }
];

const bankTransfer = {
  bankName: "TD Bank",
  routingNumber: "2113-705415",
  accountNumber: "826567920",
  accountName: "Katiiti Joyce"
};

export default function Donate() {
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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assests/children1.png)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up">
            Make a <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Difference</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Give in any form—funds, land, goods, services, equipment, or other resources. Nothing is too small.
          </p>
        </div>
      </div>
      /* Ways to Give */
<div className="relative z-20 -mt-20 pb-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="bg-white rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
          <FaHeart className="text-2xl text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
          Ways to Give
        </h2>
      </div>

      <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed text-center">
        <p className="text-xl mb-6">
          You can donate by bank transfer, mobile money, or any other support
          the Lord puts on your heart.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
          {/* Bank Transfer */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl border border-primary-200">
            <div className="flex items-center gap-3 mb-4">
              <FaUniversity className="text-primary-600 text-2xl" />
              <h3 className="text-xl font-bold text-dark-800">
                Bank Transfer Details
              </h3>
            </div>
            <ul className="space-y-2 text-dark-700">
              <li>
                <span className="font-semibold">Bank name:</span>{" "}
                {bankTransfer.bankName}
              </li>
              <li>
                <span className="font-semibold">Routing number:</span>{" "}
                {bankTransfer.routingNumber}
              </li>
              <li>
                <span className="font-semibold">Account number:</span>{" "}
                {bankTransfer.accountNumber}
              </li>
              <li>
                <span className="font-semibold">Account name:</span>{" "}
                {bankTransfer.accountName}
              </li>
            </ul>
          </div>

          {/* Mobile Money */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <FaPhone className="text-green-600 text-2xl" />
              <h3 className="text-xl font-bold text-dark-800">
                Mobile Money Donations
              </h3>
            </div>
            <ul className="space-y-2 text-dark-700">
              <li>
                <span className="font-semibold">Receiver Name:</span> Nakimera
                Lilian
              </li>
              <li>
                <span className="font-semibold">MTN/Airtel Number:</span>{" "}
                0779150560
              </li>
              <li className="text-sm text-dark-600">
                Send directly via Mobile Money and confirm with our team.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Donation Areas */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">How Your Donation Helps</h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Your generosity, in any form and amount, supports these key areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donationAreas.map((area, index) => (
            <div 
              key={area.title}
              className={`${area.bgColor} rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`${area.color} mb-6`}>
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark-800 mb-4">{area.title}</h3>
              <p className="text-dark-600 mb-2 leading-relaxed">{area.desc}</p>
              <div className="text-sm text-dark-500">Give any amount or in-kind support</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">Contact Us</h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Get in touch with our team to learn more about our work or discuss partnership opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.name}
              className="bg-white rounded-2xl shadow-large p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">{contact.name.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold text-dark-800 mb-2">{contact.name}</h3>
              <p className="text-primary-600 font-semibold mb-6">{contact.role}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-dark-500">
                  <FaPhone className="text-sm" />
                  <span className="text-sm">{contact.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-dark-500">
                  <FaEnvelope className="text-sm" />
                  <span className="text-sm">{contact.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Every donation, prayer, and partnership helps us bring hope to more families in the world. 
            Together, we can transform lives through the love of Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hope@hopechristianfoundation.co.site"
              className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="tel:+7813302611"
              className="bg-transparent text-white py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
