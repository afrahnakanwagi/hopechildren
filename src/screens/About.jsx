import { FaHeart, FaUsers, FaGraduationCap, FaHandsHelping , FaPhone, FaEnvelope } from "react-icons/fa";

// FaCalendarAlt

const achievements = [
  {
    number: "500+",
    label: "Children Helped",
    description: "Returned to school and graduated with top grades"
  },
  {
    number: "50+",
    label: "Elderly Supported",
    description: "Provided access to quality healthcare and care"
  },
  {
    number: "100+",
    label: "Women Empowered",
    description: "Through education and training programs"
  },
  {
    number: "4",
    label: "Years of Service",
    description: "Transforming lives since 2020"
  }
];

const team = [
  {
    name: "Joyce Katiiti",
    role: "Founder & CEO",
    phone: "+1 (781) 330‑2611",
    email: "joyce@hopechildrenuganda.org",
    description: "Founded the organization with a vision to bring hope to Uganda's most vulnerable communities."
  },
  {
    name: "Nakimera Lilian",
    role: "Head of Human Resources",
    phone: "+256 701 342803",
    email: "lilian@hopechildrenuganda.org",
    description: "Oversees our team development and community outreach programs."
  },
  {
    name: "Edith Mbekeka",
    role: "Programs Coordinator",
    phone: "+256 766 613051",
    email: "edith@hopechildrenuganda.org",
    description: "Coordinates our educational and empowerment initiatives."
  }
];

const longTermGoals = [
  "Establish vocational training centers for women to gain skills and start businesses",
  "Build a rehabilitation center for girls who have experienced abuse",
  "Launch an addiction treatment center for youth affected by drugs and alcohol",
  "Expand our Gospel outreach through global partnerships and missionary support",
  "Provide ongoing access to education, healthcare, clothing, and shelter"
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/assests/children1.png)'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-6 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Hope Children</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Restoring dignity, hope, and a future to those who have none through the love of Jesus Christ.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative z-20 -mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-large border border-primary-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed">
              <p className="text-lg mb-6">
                Founded in 2020 during the COVID-19 pandemic, our journey began with a heartfelt mission to help families suffering from hunger and poverty. With no formal resources—just a calling from God—we started distributing food to those in need.
              </p>
              <p className="text-lg mb-6">
                One encounter with a 70-year-old grandmother caring for her four orphaned grandchildren changed everything. With no beds, no food, and no chance of returning to school, they were on the edge of survival. That moment ignited a deeper mission: to restore dignity, hope, and a future to those who have none.
              </p>
              <p className="text-lg">
                Since then, God has continued to bless this ministry, allowing us to support even more children, families, and communities in desperate need. <strong>"We started with nothing but faith—and today, lives are being changed."</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-large p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
              <FaHeart className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Our Mission</h3>
            <p className="text-dark-600 leading-relaxed">
              To share the love of Jesus Christ through Gospel outreach, humanitarian aid to orphans and the elderly, women's empowerment programs, and physical and spiritual healing ministries.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-large p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mb-6">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Our Vision</h3>
            <p className="text-dark-600 leading-relaxed">
              We envision a transformed Uganda where the vulnerable are empowered, the Gospel is shared freely, and women and children thrive in communities of hope and dignity.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-large p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-6">
              <FaHandsHelping className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Our Values</h3>
            <p className="text-dark-600 leading-relaxed">
              Faith-driven compassion, integrity in all we do, commitment to excellence, and unwavering dedication to restoring hope and dignity for all God's children.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements So Far</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              In just four years, we have transformed countless lives through the power of Christ and the generosity of our supporters.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-white/90 mb-2">{achievement.label}</div>
                <div className="text-sm text-white/80">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Long-term Goals */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">Our Long-Term Goals</h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We have ambitious plans to expand our impact and reach even more communities in need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {longTermGoals.map((goal, index) => (
            <div key={index} className="bg-white rounded-xl shadow-medium p-6 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-success-500 to-success-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaGraduationCap className="text-sm text-white" />
                </div>
                <p className="text-dark-700 leading-relaxed">{goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-br from-dark-50 to-dark-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Our dedicated leadership team is committed to bringing hope and transformation to Uganda's most vulnerable communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-large p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                <p className="text-dark-600 mb-6 leading-relaxed">{member.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-dark-500">
                    <FaPhone className="text-sm" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-dark-500">
                    <FaEnvelope className="text-sm" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Whether through prayer, volunteering, donations, or partnerships, we invite you to join us in restoring hope and spreading God's love across Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-primary-600 py-4 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white py-4 px-8 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/60"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}