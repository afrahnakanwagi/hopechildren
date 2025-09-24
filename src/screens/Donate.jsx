import { useState } from 'react';
import { FaHeart, FaHandHoldingHeart, FaGraduationCap, FaHome, FaUtensils, FaTshirt, FaHeartbeat, FaBookOpen, FaUsers, FaGlobe, FaShieldAlt, FaCreditCard, FaMobile, FaUniversity } from "react-icons/fa";

const donationAmounts = [
  { description: "Provides food for a family for 1 month" },
  { description: "School supplies for 5 children" },
  { description: "Medical care for elderly person" },
  { description: "Vocational training for 1 woman" },
  { description: "Builds a small home for family" },
  { description: "Complete education for 1 child" }
];

const impactAreas = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description: "Provide school fees, uniforms, books, and supplies for children who cannot afford education.",
    impact: "10+ children educated"
  },
  {
    icon: <FaUtensils />,
    title: "Food & Nutrition",
    description: "Provide nutritious meals and food assistance to families struggling with hunger.",
    impact: "10+ meals served monthly"
  },
  {
    icon: <FaHome />,
    title: "Shelter",
    description: "Build and repair homes for families living in unsafe or inadequate housing conditions.",
    impact: "10+ homes built/repaired"
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description: "Provide medical care, health screenings, and medication for vulnerable individuals.",
    impact: "10+ people treated"
  },
  {
    icon: <FaTshirt />,
    title: "Clothing",
    description: "Provide clothing, shoes, and basic necessities to children and families in need.",
    impact: "10+ families clothed"
  },
  {
    icon: <FaUsers />,
    title: "Community Programs",
    description: "Support our Gospel outreach, women's empowerment, and community development programs.",
    impact: "5+ communities served"
  }
];

const paymentMethods = [
  {
    icon: <FaCreditCard />,
    title: "Credit/Debit Card",
    description: "Secure online payment via Stripe",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FaMobile />,
    title: "Mobile Money",
    description: "MTN Mobile Money, Airtel Money",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FaUniversity />,
    title: "Bank Transfer",
    description: "Direct bank transfer to our account",
    color: "from-purple-500 to-purple-600"
  }
];

export default function Donate() {
  const [currency, setCurrency] = useState('UGX');
  const [selectedAmount, setSelectedAmount] = useState(50000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false,
    recurring: false
  });
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].title);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    console.log('Donation submitted:', { amount, donorInfo, currency, paymentMethod: selectedPayment });
    alert('Thank you for your generous donation! You will receive a confirmation email shortly.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assests/children1.png)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up">
            Make a <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Difference</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Your donation helps us bring hope, healing, and transformation to Africa's most vulnerable communities.
          </p>
          <br /><br />
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Your Impact</h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto">
                Every donation, no matter the size, makes a real difference in the lives of those we serve.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {donationAmounts.map((item, index) => (
                <div 
                  key={currency === 'UGX' ? item.amountUGX : item.amountUSD}
                  className={`text-center p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up ${
                    selectedAmount === (currency === 'UGX' ? item.amountUGX : item.amountUSD)
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-large' 
                      : 'bg-gray-50 hover:bg-gray-100 text-dark-800'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setSelectedAmount(currency === 'UGX' ? item.amountUGX : item.amountUSD)}
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2">{currency === 'UGX' ? item.labelUGX : item.labelUSD}</div>
                  <div className="text-sm opacity-80">{item.description}</div>
                </div>
              ))}
            </div>
            {/* <div className="flex justify-center gap-4 my-4">
              <button type="button" onClick={() => setCurrency('UGX')} className={`px-4 py-2 rounded-full font-bold border ${currency === 'UGX' ? 'bg-primary-500 text-white' : 'bg-white text-primary-600'}`}>UGX</button>
              <button type="button" onClick={() => setCurrency('USD')} className={`px-4 py-2 rounded-full font-bold border ${currency === 'USD' ? 'bg-primary-500 text-white' : 'bg-white text-primary-600'}`}>USD</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">Make Your Donation</h2>
            <p className="text-lg text-dark-600 mb-8">
              Your generous contribution helps us continue our mission of bringing hope and transformation to Africa's most vulnerable communities.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-dark-700 font-semibold mb-3">Donation Amount</label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {donationAmounts.map((item) => (
                    <div 
                      key={currency === 'UGX' ? item.amountUGX : item.amountUSD}
                      className={`p-3 rounded-xl cursor-pointer transition-all duration-300 text-center ${
                        selectedAmount === (currency === 'UGX' ? item.amountUGX : item.amountUSD)
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
                          : 'bg-gray-50 hover:bg-gray-100 text-dark-800'
                      }`}
                      onClick={() => setSelectedAmount(currency === 'UGX' ? item.amountUGX : item.amountUSD)}
                    >
                      <div className="font-bold">{currency === 'UGX' ? item.labelUGX : item.labelUSD}</div>
                      <div className="text-xs opacity-80">{item.description}</div>
                    </div>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder={`Or enter custom amount (${currency})`}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-dark-800">Donor Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={donorInfo.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-dark-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={donorInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+256 701 234567"
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={donorInfo.anonymous}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-600 border-primary-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-dark-700">Make this donation anonymous</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="recurring"
                      checked={donorInfo.recurring}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-600 border-primary-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-dark-700">Make this a monthly recurring donation</span>
                  </label>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-xl font-bold text-dark-800 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={method.title}
                      className={`border border-primary-200 rounded-xl p-4 hover:border-primary-400 transition-all duration-300 cursor-pointer ${selectedPayment === method.title ? 'ring-2 ring-primary-500 border-primary-500 bg-primary-50' : ''}`}
                      onClick={() => setSelectedPayment(method.title)}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mb-3`}>
                        <div className="text-white text-xl">{method.icon}</div>
                      </div>
                      <h4 className="font-bold text-dark-800 mb-1">{method.title}</h4>
                      <p className="text-sm text-dark-600">{method.description}</p>
                      {method.title === 'Bank Transfer' && (
                        <div className="mt-2 text-xs text-dark-700 bg-primary-50 rounded p-2">
                          <div><b>Bank name:</b> TD Bank</div>
                          <div><b>Routing number:</b> 2113-70545</div>
                          <div><b>Account number:</b> 8265167920</div>
                        </div>
                      )}
                      {selectedPayment === method.title && (
                        <div className="mt-2 text-primary-600 font-bold text-xs">Selected</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-2xl text-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaHeart />
                  Donate Now
                </span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-dark-500 text-sm">
                <FaShieldAlt />
                <span>Your donation is secure and tax-deductible</span>
              </div>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">How Your Donation Helps</h2>
            <p className="text-lg text-dark-600 mb-8">
              Your generous contribution directly supports our programs and makes a lasting impact in the communities we serve.
            </p>
            
            <div className="space-y-6">
              {impactAreas.map((area, index) => (
                <div key={area.title} className="bg-white rounded-2xl shadow-large p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white text-xl">{area.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark-800 mb-2">{area.title}</h3>
                      <p className="text-dark-600 mb-3 leading-relaxed">{area.description}</p>
                      <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {area.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
            Every donation, no matter the size, helps us bring hope and transformation to Uganda's most vulnerable communities. 
            Together, we can make a lasting difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#donation-form"
              className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
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