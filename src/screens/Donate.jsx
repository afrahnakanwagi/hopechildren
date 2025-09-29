import { Link } from "react-router-dom";
import {
  FaHeart,
  FaHandHoldingHeart,
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaPhone,
  FaArrowRight,
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
  FaHome,
  FaChurch,
  FaCross,
  FaUniversity,
  FaGift,
  FaTruckMoving,
  FaLandmark,
  FaEnvelope,
} from "react-icons/fa";

const images = [
  {
    src: "/images/donation1.jpg",
    title: "Support Vulnerable Children",
    description: "Help us provide food, clothing, and shelter for children in need.",
  },
  {
    src: "/images/donation2.jpg",
    title: "Education for All",
    description: "Your donation helps us give children access to quality education.",
  },
  {
    src: "/images/donation3.jpg",
    title: "Community Support",
    description: "Together we can build a stronger, supportive community for families.",
  },
];

export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Every contribution makes a difference in the lives of children and families we
            serve. Join us in bringing hope and transformation to communities.
          </p>
        </div>
      </div>

      {/* Donation Options */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Ways You Can Help
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <FaHeart className="text-5xl text-primary-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-6">
              Contribute to our programs and help us reach more children with food, shelter,
              and education.
            </p>
            <a
              href="mailto:hope@hopechristianfoundation.co.site"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800"
            >
              Donate Now <FaArrowRight className="ml-2" />
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <FaUsers className="text-5xl text-secondary-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Sponsor a Child</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to support a child's education, health, and spiritual growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-800"
            >
              Learn More <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <FaHandsHelping className="text-5xl text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-6">
              Join hands with us as a church, organization, or individual to expand our
              reach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-800"
            >
              Get Involved <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Your Support Makes This Possible
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaGraduationCap className="text-4xl text-primary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600">Providing quality education and school supplies.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaHome className="text-4xl text-secondary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Shelter</h3>
              <p className="text-gray-600">Safe housing for vulnerable children and families.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaGift className="text-4xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Food Support</h3>
              <p className="text-gray-600">Nutritious meals for children and families in need.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FaHandsHelping className="text-4xl text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">Building strong, supportive, faith-based communities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Every donation, prayer, and partnership helps us bring hope to more families in
            the world. Together, we can transform lives through the love of Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hope@hopechristianfoundation.co.site"
              className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
