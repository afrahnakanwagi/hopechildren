import React from "react";
import { motion } from "framer-motion";
import { SiZelle, SiVenmo, SiPaypal, SiCashapp } from "react-icons/si";
import { FaHeart, FaHandshake, FaGraduationCap, FaHome, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const Donate = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F1E6FF 0%, #E8F1FF 100%)",
        color: "#1E293B",
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#A855F7]/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-48 h-48 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#2563EB]/15 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-[#16A34A]/15 rounded-2xl blur-2xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-float"
          style={{
            backgroundColor: `rgba(59, 130, 246, 0.3)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        ></div>
      ))}

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Header Section with Icons */}
        <div className="mb-12">
          <div className="flex items-center justify-start gap-6 md:gap-8 mb-8 flex-wrap lg:flex-nowrap">
            <div className="flex items-center gap-4 md:gap-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <SiVenmo className="text-[#3B82F6] text-5xl md:text-7xl" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <SiZelle className="text-[#3B82F6] text-5xl md:text-7xl" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <SiPaypal className="text-[#F97316] text-5xl md:text-7xl" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <SiCashapp className="text-[#16A34A] text-5xl md:text-7xl" />
              </motion.div>
            </div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight flex-1"
              style={{ textShadow: "4px 4px 8px rgba(0,0,0,0.2)" }}
            >
              TITHES & OFFERING
            </motion.h1>
          </div>

          {/* Payment Info */}
          <motion.div variants={fadeInUp} className="space-y-3 mb-8 text-center">
            <div className="font-black text-2xl md:text-4xl text-[#2563EB]">
              FOR ZELLE, VENMO, CASH APP, PAYPAL
            </div>
            <div className="font-black text-3xl md:text-5xl text-[#2563EB]">
              📞 +1 508 810 7993
            </div>
            <div className="font-bold text-xl md:text-3xl mt-6 text-[#9333EA]">
              FOR CHECKS: PAYABLE TO
            </div>
            <div className="font-bold text-xl md:text-3xl text-[#9333EA]">
              Hope Christian Foundation
            </div>
            <div className="font-bold text-xl md:text-3xl mt-4 text-[#9333EA]">
              Or call +1 508 810 7993
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-1 bg-[#2563EB] mx-auto mb-8"
          ></motion.div>
        </div>

        {/* Bank Transfer Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#E6FFF2] rounded-3xl p-8 md:p-12 text-left shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black text-[#15803D] mb-6">
            Bank Name: TD Bank
          </h3>
          <div>
            <span className="block">Account Name:</span>
            <span className="text-2xl md:text-3xl font-black">
              Hope Christian Foundation
            </span>
          </div>
        </motion.div>

        {/* ✅ Animated "Ways You Can Help" Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 mt-20 w-full max-w-6xl text-center"
        >
          <h2 className="text-3xl font-bold mb-10 text-[#1E293B]">
            Ways You Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-[#F97316] text-4xl mb-4 mx-auto" />,
                title: "Make a Donation",
                desc: "Contribute to our programs and help us reach more children with food, shelter, and education.",
                bg: "#FFF4E6",
                text: "#F97316",
              },
              {
                icon: <FaHandshake className="text-[#3B82F6] text-4xl mb-4 mx-auto" />,
                title: "Sponsor a Child",
                desc: "Partner with us to support a child’s education, health, and spiritual growth.",
                bg: "#E8F1FF",
                text: "#3B82F6",
              },
              {
                icon: <FaHandshake className="text-[#16A34A] text-4xl mb-4 mx-auto" />,
                title: "Partner With Us",
                desc: "Join hands with us as a church, organization, or individual to expand our reach.",
                bg: "#E6FFF2",
                text: "#16A34A",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                style={{ backgroundColor: item.bg }}
              >
                {item.icon}
                <h3 className="font-bold text-xl mb-2" style={{ color: item.text }}>
                  {item.title}
                </h3>
                <p className="text-[#1E293B] mb-4">{item.desc}</p>
                <Link
                  to="/contact"
                  className="font-semibold hover:underline"
                  style={{ color: item.text }}
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ✅ Animated "Your Support Makes This Possible" Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 mt-20 w-full max-w-6xl text-center"
        >
          <h2 className="text-3xl font-bold mb-10 text-[#1E293B]">
            Your Support Makes This Possible
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaGraduationCap className="text-[#F97316] text-4xl mb-4 mx-auto" />,
                title: "Education",
                desc: "Providing quality education and school supplies.",
                bg: "#FFF4E6",
              },
              {
                icon: <FaHome className="text-[#3B82F6] text-4xl mb-4 mx-auto" />,
                title: "Shelter",
                desc: "Safe housing for vulnerable children and families.",
                bg: "#E8F1FF",
              },
              {
                icon: <FaGift className="text-[#16A34A] text-4xl mb-4 mx-auto" />,
                title: "Food Support",
                desc: "Nutritious meals for children and families in need.",
                bg: "#E6FFF2",
              },
              {
                icon: <FaHandshake className="text-[#F97316] text-4xl mb-4 mx-auto" />,
                title: "Community",
                desc: "Building strong, supportive, faith-based communities.",
                bg: "#FFF4E6",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                style={{ backgroundColor: item.bg }}
              >
                {item.icon}
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-[#1E293B]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* Extra CSS for Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Donate;
