import React from "react";
import { FaUniversity, FaPhoneAlt, FaHeart } from "react-icons/fa";
import { SiZelle, SiVenmo, SiPaypal, SiCashapp } from "react-icons/si";

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
    accountName: "Hope christian foundation",
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

      <div className="relative z-10 bg-white/95 shadow-2xl rounded-3xl p-8 w-full max-w-3xl text-center border border-white/30 backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold mb-6 text-primary-600 flex items-center justify-center gap-2">
          <FaHeart className="text-accent-600 animate-pulse" /> Tithes & Offering
        </h1>

        <p className="text-lg mb-8 text-dark-700">
          Support <strong>Hope Christian Foundation</strong> by giving through
          any of the methods below.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border border-white/30 hover:shadow-2xl hover:bg-white/40 transition-all duration-500 transform hover:-translate-y-2 ${
                index === 0
                  ? "bg-blue-100" // Zelle / Venmo
                  : index === 1
                  ? "bg-purple-100" // CashApp
                  : "bg-orange-100" // PayPal
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
            </div>
          ))}
        </div>

        {/* Bank Transfer Section */}
        <div className="bg-green-100 rounded-2xl p-6 border border-white/30 mt-8 text-left hover:shadow-2xl transition-all duration-500">
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
        </div>

        {/* Contact Section */}
        <div className="bg-yellow-100 rounded-2xl p-6 border border-white/30 mt-8 flex flex-col items-center hover:shadow-xl transition-all duration-500">
          <FaPhoneAlt className="text-primary-600 text-2xl mb-2 animate-pulse" />
          <p className="font-semibold text-dark-700">For any questions or checks:</p>
          <p className="text-lg font-bold text-dark-800 mt-1">+1 508 810 7993</p>
        </div>

        {/* Bible Verse Section */}
        <div className="bg-pink-50/50 backdrop-blur-sm rounded-2xl p-6 mt-8 max-w-xl mx-auto">
          <p className="text-dark-700 text-center font-medium italic">
            "For I was hungry and you gave me food, I was thirsty and you gave me drink, 
            I was a stranger and you welcomed me." - Matthew 25:35
          </p>
        </div>
      </div>

      {/* Extra CSS for Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
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
