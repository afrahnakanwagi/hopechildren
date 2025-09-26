import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-dark-800 to-dark-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <FaHeart className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Hope Children &amp; Elderly
                </h3>
                <p className="text-sm text-primary-300">
                  Christian Foundation Uganda
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bringing hope to the hopeless through the Gospel of Jesus Christ.
              Founded in 2020, we serve the world’s most vulnerable with
              compassion and faith.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {/* Facebook link (uncomment when ready)
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              */}

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="https://www.instagram.com/hope_christianfoundation20_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://wa.me/15088107993"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-success-500 to-success-600 rounded-lg flex items-center justify-center hover:from-success-600 hover:to-success-700 transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-300 mb-4">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhone className="text-sm text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Joyce Katiti (Founder)
                  </p>
                  <p className="text-sm text-gray-300">
                    +1 (781) 330-2611
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhone className="text-sm text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Uganda Office
                  </p>
                  <p className="text-sm text-gray-300">+256 701 342803</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-sm text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-sm text-gray-300">Uganda, East Africa</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEnvelope className="text-sm text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-gray-300">
                    hope@hopechristianfoundation.co.site
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-300 mb-4">
              Our Focus Areas
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Gospel Outreach &amp; Evangelism
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Orphan &amp; Child Care
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Elderly Support Services
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Women’s Empowerment
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Education &amp; Healthcare
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Community Development
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  About Our Mission
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Future Projects
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Make a Donation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2025 Hope Children &amp; Elderly Christian Foundation Uganda.
                All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-primary-300 font-medium flex items-center justify-center md:justify-end space-x-1">
                <FaHeart className="text-primary-400" />
                <span>Made with love for children</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
