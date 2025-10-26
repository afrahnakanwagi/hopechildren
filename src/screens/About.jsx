import React from "react";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Join Us in Making a Difference
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
          Ever since we started, there has been a great change in these children. 
          They were hopeless but now they can tell that their future is bright. 
          I can testify on this through their academics because they are coming 
          out with very good grades.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Donate Button */}
          <Link
            to="/donate"
            className="bg-white text-primary-600 py-5 px-10 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <FaHandHoldingHeart className="text-lg" />
            Donate Now
          </Link>

          {/* Get Involved Button */}
          <Link
            to="/contact"
            className="bg-transparent text-white py-5 px-10 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60 flex items-center justify-center gap-3"
          >
            Get Involved
            <FaArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
