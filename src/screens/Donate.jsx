import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaPhoneAlt,
  FaHeart,
  FaHandshake,
  FaGift,
  FaHome,
  FaGraduationCap,
} from "react-icons/fa";
import { SiZelle, SiVenmo, SiPaypal, SiCashapp } from "react-icons/si";
import { Link } from "react-router-dom"; // ✅ Added Link import

const Donate = () => {
  const paymentMethods = [
    {
      name: "Zelle / Venmo",
      icon: <SiZelle className="text-primary-600 text-3xl" />,
      details: [
        "Send via Zelle or Venmo to:",
        "📞 +1 508 810 7993",
        "Recipient: Hope Christian Foundation",
      ],
      link: "https://www.zellepay.com",
    },
    {
      name: "CashApp",
      icon: <SiCashapp className="text-secondary-600 text-3xl" />,
      details: ["Send via CashApp: $HopeFoundation"],
      link: "https://cash.app/$HopeFoundation",
    },
    {
      name: "PayPal",
      icon: <SiPaypal className="text-accent-600 text-3xl" />,
      details: ["PayPal: paypal.me/hopefoundation"],
      link: "https://paypal.me/hopefoundation",
    },
  ];

  const bankDetails = {
    name: "TD Bank",
    routing: "2113-70545",
    account: "8265167920",
    accountName: "Hope Christian Foundation",
  };

  // Framer Motion variants for scroll animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-secondary-50 p-6 overflow-hidden text-dark-800">
      {/* Floating Gradient Circles */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-500/15 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-success-500/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
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

      {/* Donation Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 bg-white/95 shadow-2xl rounded-3xl p-8 w-full max-w-3xl text-center border border-white/30 backdrop-blur-sm"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-primary-600 flex items-center justify-center gap-2">
          <FaHeart className="text-accent-600 animate-pulse" /> Tithes & Offering
        </h1>

        <p className="text-lg mb-8 text-dark-700">
          Support <strong>Hope Christian Foundation</strong> by giving through
          any of the methods below.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl p-6 border border-white/30 hover:shadow-2xl hover:bg-white/40 transition-all duration-500 ${
                index === 0
                  ? "bg-blue-100"
                  : index === 1
                  ? "bg-purple-100"
                  : "bg-orange-100"
              }`}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                {method.icon}
                <h2 className="text-xl font-semibold text-primary-600">
                  {method.name}
                </h2>
              </div>
              <ul className="text-dark-700 text-sm space-y-1 mb-4">
                {method.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-2 px-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 hover:scale-105 hover:shadow-xl transition-all duration-300 inline-block"
              >
                Open {method.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bank Transfer Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-green-100 rounded-2xl p-6 border border-white/30 mt-8 text-left hover:shadow-2xl transition-all duration-500"
        >
          <h3 className="text-xl font-semibold text-primary-600 mb-3 flex items-center gap-2">
            <FaUniversity /> Bank Transfer Details
          </h3>
          <ul className="text-dark-700 text-sm space-y-2">
            <li>
              <strong>Bank Name:</strong> {bankDetails.name}
            </li>
            <li>
              <strong>Routing Number:</strong> {bankDetails.routing}
            </li>
            <li>
              <strong>Account Number:</strong> {bankDetails.account}
            </li>
            <li>
              <strong>Account Name:</strong> {bankDetails.accountName}
            </li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-yellow-100 rounded-2xl p-6 border border-white/30 mt-8 flex flex-col items-center hover:shadow-xl transition-all duration-500"
        >
          <FaPhoneAlt className="text-primary-600 text-2xl mb-2 animate-pulse" />
          <p className="font-semibold text-dark-700">
            For any questions or checks:
          </p>
          <p className="text-lg font-bold text-dark-800 mt-1">+1 508 810 7993</p>
        </motion.div>

        {/* Bible Verse Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-pink-50/50 backdrop-blur-sm rounded-2xl p-6 mt-8 max-w-xl mx-auto"
        >
          <p className="text-dark-700 text-center font-medium italic">
            "For I was hungry and you gave me food, I was thirsty and you gave
            me drink, I was a stranger and you welcomed me." - Matthew 25:35
          </p>
        </motion.div>
      </motion.div>

      {/* ✅ Animated "Ways You Can Help" Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 mt-20 w-full max-w-6xl text-center"
      >
        <h2 className="text-3xl font-bold mb-10 text-dark-800">
          Ways You Can Help
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHeart className="text-orange-500 text-4xl mb-4 mx-auto" />,
              title: "Make a Donation",
              desc: "Contribute to our programs and help us reach more children with food, shelter, and education.",
              color: "orange",
            },
            {
              icon: <FaHandshake className="text-blue-500 text-4xl mb-4 mx-auto" />,
              title: "Sponsor a Child",
              desc: "Partner with us to support a child’s education, health, and spiritual growth.",
              color: "blue",
            },
            {
              icon: <FaHandshake className="text-green-500 text-4xl mb-4 mx-auto" />,
              title: "Partner With Us",
              desc: "Join hands with us as a church, organization, or individual to expand our reach.",
              color: "green",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className={`bg-${item.color}-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition`}
            >
              {item.icon}
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-dark-700 mb-4">{item.desc}</p>
              {/* ✅ Changed Learn More links to Contact page */}
              <Link
                to="/contact"
                className={`text-${item.color}-600 font-semibold hover:underline`}
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
        <h2 className="text-3xl font-bold mb-10 text-dark-800">
          Your Support Makes This Possible
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <FaGraduationCap className="text-orange-500 text-4xl mb-4 mx-auto" />
              ),
              title: "Education",
              desc: "Providing quality education and school supplies.",
              color: "orange",
            },
            {
              icon: <FaHome className="text-blue-500 text-4xl mb-4 mx-auto" />,
              title: "Shelter",
              desc: "Safe housing for vulnerable children and families.",
              color: "blue",
            },
            {
              icon: <FaGift className="text-green-500 text-4xl mb-4 mx-auto" />,
              title: "Food Support",
              desc: "Nutritious meals for children and families in need.",
              color: "green",
            },
            {
              icon: (
                <FaHandshake className="text-yellow-500 text-4xl mb-4 mx-auto" />
              ),
              title: "Community",
              desc: "Building strong, supportive, faith-based communities.",
              color: "yellow",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className={`bg-${item.color}-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition`}
            >
              {item.icon}
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-dark-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Floating Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Donate;
