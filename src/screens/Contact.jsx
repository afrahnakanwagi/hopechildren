import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeart, FaUsers, FaGraduationCap, FaHandshake } from "react-icons/fa";

const team = [
  {
    name: "Joyce Katiiti",
    role: "Founder & CEO",
    phone: "+1 (781) 330‑2611",
    email: "joyce@hopechildrenuganda.org",
    avatar: "👩🏾‍💼",
    description: "Founded the organization with a vision to bring hope to Uganda's most vulnerable communities. Leads strategic initiatives and oversees all operations.",
    specialties: ["Strategic Planning", "Community Outreach", "Partnership Development"]
  },
  {
    name: "Nakimera Lilian",
    role: "Head of Human Resources",
    phone: "+256 701 342803",
    email: "lilian@hopechildrenuganda.org",
    avatar: "👩🏾‍💼",
    description: "Oversees our team development, community outreach programs, and ensures the well-being of all staff and volunteers.",
    specialties: ["Team Management", "Community Programs", "Volunteer Coordination"]
  },
  {
    name: "Edith Mbekeka",
    role: "Programs Coordinator",
    phone: "+256 766 613051",
    email: "edith@hopechildrenuganda.org",
    avatar: "👩🏾‍💼",
    description: "Coordinates our educational and empowerment initiatives, ensuring effective program delivery and impact measurement.",
    specialties: ["Education Programs", "Women's Empowerment", "Impact Assessment"]
  }
];

const contactInfo = [
  {
    icon: <FaPhone />,
    title: "Phone",
    details: ["+1 (781) 330‑2611", "+256 701 342803"],
    description: "Call us for immediate assistance"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    details: [, "info@hopechildrenuganda.org"],  
    // " donations@hopechildrenuganda.org"
   
    description: "Send us a message anytime"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    details: ["Kampala, Uganda", "Eastern Region, Uganda"],
    description: "Serving communities across Uganda"
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 3:00 PM"],
    description: "Uganda Time (EAT)"
  }
];

const waysToHelp = [
  {
    icon: <FaHeart />,
    title: "Donate",
    description: "Financial contributions help us provide essential services to those in need.",
    action: "Make a Donation"
  },
  {
    icon: <FaUsers />,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers making a difference in communities.",
    action: "Become a Volunteer"
  },
  {
    icon: <FaGraduationCap />,
    title: "Partner",
    description: "Partner with us to expand our programs and reach more communities.",
    action: "Partnership Inquiry"
  },
  {
    icon: <FaHandshake />,
    title: "Pray",
    description: "Your prayers support our mission and the communities we serve.",
    action: "Prayer Requests"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      interest: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assests/children3.png)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up">
            Get in <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Connect with us to learn more about our mission and how you can help make a difference.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Contact Information</h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto">
                We're here to help and answer any questions you may have about our programs and how you can get involved.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl text-white">{info.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 mb-3">{info.title}</h3>
                  <div className="space-y-2 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-dark-600 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-dark-500">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">Send Us a Message</h2>
            <p className="text-lg text-dark-600 mb-8">
              Have a question or want to learn more about our programs? We'd love to hear from you.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-dark-700 font-semibold mb-2">Area of Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select an area of interest</option>
                  <option value="donation">Making a Donation</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="programs">Our Programs</option>
                  <option value="prayer">Prayer Requests</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-dark-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-2xl text-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Team Section */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">Meet Our Team</h2>
            <p className="text-lg text-dark-600 mb-8">
              Our dedicated leadership team is committed to bringing hope and transformation to Uganda's most vulnerable communities.
            </p>
            
            <div className="space-y-6">
              {team.map((member, index) => (
                <div key={member.name} className="bg-white rounded-2xl shadow-large p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl text-white font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark-800 mb-1">{member.name}</h3>
                      <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-dark-600 text-sm mb-3 leading-relaxed">{member.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-dark-500 text-sm">
                          <FaPhone className="text-xs" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-dark-500 text-sm">
                          <FaEnvelope className="text-xs" />
                          <span>{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ways to Help */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ways to Help</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              There are many ways you can support our mission and make a difference in the lives of those we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waysToHelp.map((way, index) => (
              <div key={way.title} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-white">{way.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{way.title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">{way.description}</p>
                <a
                  href="/donate"
                  className="inline-block bg-white text-primary-600 py-2 px-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  {way.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}